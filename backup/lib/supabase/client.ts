import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from './types';
import { env } from './env';

export const createSupabaseBrowserClient = () =>
  createBrowserSupabaseClient<Database>({
    supabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
