import { createClient } from '@supabase/supabase-js';
import {
  createMiddlewareClient,
  createServerActionClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { NextRequest, NextResponse } from 'next/server';
import type { Database } from './types';
import { env } from './env';

export const supabaseAdminClient = createClient<Database>(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
    },
    global: {
      headers: {
        'x-tradetrust-app': 'tradetrust-server',
      },
    },
  }
);

export const createSupabaseServerClient = () =>
  createServerComponentClient<Database>({ cookies });

export const createSupabaseServerActionClient = () =>
  createServerActionClient<Database>({ cookies });

export const createSupabaseMiddlewareClient = (
  req: NextRequest,
  res: NextResponse,
) =>
  createMiddlewareClient<Database>({
    req,
    res,
    cookies,
    supabaseUrl: env.SUPABASE_URL,
    supabaseKey: env.SUPABASE_ANON_KEY,
  });
