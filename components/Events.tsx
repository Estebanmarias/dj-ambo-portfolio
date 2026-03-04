'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, Music, Ticket, Share2, Check } from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;

interface Event {
  id: string;
  title: string;
  date: string | null;
  time: string | null;
  venue: string;
  price: string | null;
  category: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

const events: Event[] = [
  {
    id: 'ambo-street-4',
    title: 'AMBO STREET 4.0',
    date: 'March 20, 2026',
    time: '8PM Till Dawn',
    venue: 'Reeplay Car Park, Ogbomoso',
    price: '₦3,000 Early Bird · ₦5,000 At The Gate',
    category: 'Street Party',
    description: 'Music performances, games, pure fun, drink challenges, best dressed. 18+ only.',
    image: '/images/event-ambo-street.jpg',
  },
  {
    id: 'sneaker-fest-26',
    title: 'SNEAKER FEST 26',
    date: null,
    time: null,
    venue: 'Ogbomoso',
    price: null,
    category: 'Festival',
    description: 'Something big is coming. Stay locked in.',
    image: '/images/event-sneaker-fest.jpg',
    comingSoon: true,
  },
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isShared, setIsShared] = useState(false);

  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const handleShare = async () => {
    const shareData = {
      title: `DJ AMBO: ${event.title}`,
      text: `${event.title}${event.date ? ` — ${event.date}` : ' — Coming Soon'}. ${event.description}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch {}
    } else {
      navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    }
  };

  const handleReserve = () => {
    window.open('https://api.whatsapp.com/send/?phone=2348145345218', '_blank');
  };

  return (
    <MotionDiv
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:border-neonPurple/50 transition-colors flex flex-col h-full"
    >
      {/* Image */}
      <div className="h-72 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <MotionImg
          style={{ y, scale: 1.15 }}
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {/* Category badge */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
          {event.category}
        </div>
        {/* Coming Soon badge */}
        {event.comingSoon && (
          <div className="absolute top-4 left-4 z-20 bg-neonPurple/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
            Coming Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-20 -mt-10 bg-[#1a0025] rounded-t-3xl border-t border-white/5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-neonPurple transition-colors">
            {event.title}
          </h2>
          <button
            onClick={handleShare}
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all flex-shrink-0 text-gray-400"
            title="Share Event"
          >
            {isShared ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-5 h-5 mr-3 text-neonPurple" />
            <span className="font-medium">{event.date ?? 'Date TBA'}</span>
          </div>
          {event.time && (
            <div className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-3 text-metallicGold" />
              <span>{event.time}</span>
            </div>
          )}
          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 mr-3 text-red-500" />
            <span>{event.venue}</span>
          </div>
          {event.price && (
            <div className="flex items-center text-gray-300">
              <Ticket className="w-5 h-5 mr-3 text-green-500" />
              <span className="text-sm font-bold tracking-wide">{event.price}</span>
            </div>
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>

        <button
          onClick={handleReserve}
          className="w-full py-4 bg-white/5 hover:bg-neonPurple text-white font-bold rounded-xl border border-white/10 hover:border-neonPurple transition-all flex items-center justify-center gap-2 mt-auto shadow-lg"
        >
          {event.comingSoon ? 'Get Notified' : 'Reserve Spot'} <Music className="w-4 h-4" />
        </button>
      </div>
    </MotionDiv>
  );
};

export default function Events() {
  return (
    <section id="events" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-pink-500 mb-3">
          UPCOMING EVENTS
        </h2>
        <p className="text-gray-400">Catch DJ AMBO live — book your spot before it sells out</p>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}