'use client';

import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from './types';
import { supabaseEnv } from './env';

export const createSupabaseBrowserClient = () =>
  createBrowserClient<Database>(supabaseEnv.SUPABASE_URL, supabaseEnv.SUPABASE_ANON_KEY);
