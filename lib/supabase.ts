import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pesahkqqoyelgezkfhcn.supabase.co';
const supabaseKey = 'sb_publishable_B_sp-7fYCGOSbLPnZcfmQg_FXMm3TYY';

export const supabase = createClient(supabaseUrl, supabaseKey);