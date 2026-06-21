import { createClient } from '@supabase/supabase-js';
import {
  createServerActionClient,
  createServerComponentClient,
  createMiddlewareClient,
} from '@supabase/auth-helpers-nextjs';
import type { Database } from './types';
import { supabaseEnv } from './env';

export const supabaseAdminClient = createClient<Database>(
  supabaseEnv.SUPABASE_URL,
  supabaseEnv.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: { persistSession: false },
  }
);

export const createSupabaseServerClient = () =>
  createServerComponentClient<Database>({
    supabaseUrl: supabaseEnv.SUPABASE_URL,
    supabaseKey: supabaseEnv.SUPABASE_ANON_KEY,
  });

export const createSupabaseServerActionClient = () =>
  createServerActionClient<Database>({
    supabaseUrl: supabaseEnv.SUPABASE_URL,
    supabaseKey: supabaseEnv.SUPABASE_ANON_KEY,
  });

export const createSupabaseMiddlewareClient = (req: Request, res: Response) =>
  createMiddlewareClient<Database>({
    supabaseUrl: supabaseEnv.SUPABASE_URL,
    supabaseKey: supabaseEnv.SUPABASE_ANON_KEY,
    req,
    res,
  });
