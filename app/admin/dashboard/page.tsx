'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { Plus, Pencil, Trash2, ToggleLeft, ToggleRight, X, Upload, LogOut } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string | null;
  time: string | null;
  venue: string;
  price: string | null;
  category: string;
  description: string;
  image_url: string;
  coming_soon: boolean;
  is_active: boolean;
}

const empty: Omit<Event, 'id'> = {
  title: '',
  date: '',
  time: '',
  venue: '',
  price: '',
  category: '',
  description: '',
  image_url: '',
  coming_soon: false,
  is_active: true,
};

export default function AdminDashboard() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Event | null>(null);
  const [form, setForm] = useState<Omit<Event, 'id'>>(empty);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('admin_auth') !== 'true') {
      router.push('/admin');
    } else {
      fetchEvents();
    }
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    const { data } = await supabase.from('events').select('*').order('created_at', { ascending: false });
    if (data) setEvents(data);
    setLoading(false);
  };

  const openAdd = () => {
    setEditing(null);
    setForm(empty);
    setImageFile(null);
    setError('');
    setShowModal(true);
  };

  const openEdit = (event: Event) => {
    setEditing(event);
    setForm({ ...event });
    setImageFile(null);
    setError('');
    setShowModal(true);
  };

  const handleImageUpload = async (): Promise<string | null> => {
    if (!imageFile) return form.image_url || null;
    const ext = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('events').upload(fileName, imageFile, { upsert: true });
    if (error) { setError('Image upload failed'); return null; }
    const { data } = supabase.storage.from('events').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const imageUrl = await handleImageUpload();
    if (imageFile && !imageUrl) { setSaving(false); return; }

    const payload = { ...form, image_url: imageUrl || form.image_url };

    if (editing) {
      const { error } = await supabase.from('events').update(payload).eq('id', editing.id);
      if (error) { setError('Failed to update event'); setSaving(false); return; }
    } else {
      const { error } = await supabase.from('events').insert(payload);
      if (error) { setError('Failed to create event'); setSaving(false); return; }
    }

    setSaving(false);
    setShowModal(false);
    fetchEvents();
  };

  const toggleActive = async (event: Event) => {
    await supabase.from('events').update({ is_active: !event.is_active }).eq('id', event.id);
    fetchEvents();
  };

  const deleteEvent = async (id: string) => {
    if (!confirm('Delete this event?')) return;
    await supabase.from('events').delete().eq('id', id);
    fetchEvents();
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#12001a] text-white px-4 py-8 md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-white">Event Dashboard</h1>
          <p className="text-white/50 text-sm mt-1">Manage DJ AMBO events</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-3 bg-neonPurple text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(176,68,255,0.5)] transition-all"
          >
            <Plus className="w-5 h-5" /> Add Event
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Events Table */}
      {loading ? (
        <p className="text-white/50">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-white/50">No events yet. Add one!</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              {event.image_url && (
                <img src={event.image_url} alt={event.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-white">{event.title}</h3>
                  {event.coming_soon && (
                    <span className="text-xs bg-neonPurple/20 text-neonPurple px-2 py-0.5 rounded-full">Coming Soon</span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${event.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {event.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-white/50 text-sm mt-1">{event.date ?? 'TBA'} {event.venue ? `· ${event.venue}` : ''}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => toggleActive(event)} className="p-2 rounded-lg hover:bg-white/10 transition-all" title="Toggle Active">
                  {event.is_active ? <ToggleRight className="w-5 h-5 text-green-400" /> : <ToggleLeft className="w-5 h-5 text-white/40" />}
                </button>
                <button onClick={() => openEdit(event)} className="p-2 rounded-lg hover:bg-white/10 transition-all" title="Edit">
                  <Pencil className="w-5 h-5 text-neonPurple" />
                </button>
                <button onClick={() => deleteEvent(event.id)} className="p-2 rounded-lg hover:bg-white/10 transition-all" title="Delete">
                  <Trash2 className="w-5 h-5 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-[#1a0025] border border-white/10 rounded-3xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">{editing ? 'Edit Event' : 'Add Event'}</h2>
              <button onClick={() => setShowModal(false)}><X className="w-6 h-6 text-white/50 hover:text-white" /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <input required placeholder="Event Title" value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all" />

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Date (e.g. March 20, 2026)" value={form.date ?? ''}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all" />
                <input placeholder="Time (e.g. 8PM Till Dawn)" value={form.time ?? ''}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all" />
              </div>

              <input placeholder="Venue" value={form.venue}
                onChange={e => setForm({ ...form, venue: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all" />

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Category (e.g. Street Party)" value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all" />
                <input placeholder="Price (e.g. ₦3,000)" value={form.price ?? ''}
                  onChange={e => setForm({ ...form, price: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all" />
              </div>

              <textarea placeholder="Description" rows={3} value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-all resize-none" />

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="text-sm text-white/60">Event Image</label>
                <label className="flex items-center gap-3 cursor-pointer w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-3 hover:border-neonPurple transition-all">
                  <Upload className="w-5 h-5 text-neonPurple" />
                  <span className="text-white/60 text-sm">{imageFile ? imageFile.name : 'Click to upload image'}</span>
                  <input type="file" accept="image/*" className="hidden"
                    onChange={e => setImageFile(e.target.files?.[0] || null)} />
                </label>
                {form.image_url && !imageFile && (
                  <img src={form.image_url} alt="current" className="h-20 rounded-xl object-cover" />
                )}
              </div>

              {/* Toggles */}
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.coming_soon}
                    onChange={e => setForm({ ...form, coming_soon: e.target.checked })}
                    className="w-4 h-4 accent-purple-500" />
                  <span className="text-sm text-white/70">Coming Soon</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.is_active}
                    onChange={e => setForm({ ...form, is_active: e.target.checked })}
                    className="w-4 h-4 accent-purple-500" />
                  <span className="text-sm text-white/70">Active</span>
                </label>
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button type="submit" disabled={saving}
                className="w-full py-4 bg-neonPurple text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(176,68,255,0.5)] transition-all disabled:opacity-50">
                {saving ? 'Saving...' : editing ? 'Update Event' : 'Create Event'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}