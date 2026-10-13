import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://nzvvxajycmwfpalnjmdh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_rUnHOXMLc8cl6WvS19ZKkg_VjpC-dDi";

window.mercobSupabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
window.dispatchEvent(new Event("mercob-supabase-ready"));
