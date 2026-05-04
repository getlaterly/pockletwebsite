import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ncrbjgksceobevxztvan.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wbFUXt0btDi0XHV5iLpIuw_QVdgWlSd';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
