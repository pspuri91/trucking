// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Use NEXT_PUBLIC_ prefix
const supabaseRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY; // Use NEXT_PUBLIC_ prefix

if (!supabaseUrl || !supabaseRoleKey) {
  throw new Error('Missing Supabase URL or Service Role Key in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseRoleKey);
