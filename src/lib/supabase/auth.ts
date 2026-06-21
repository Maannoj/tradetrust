import type { Session, User } from '@supabase/supabase-js';
import { createSupabaseServerClient, supabaseAdminClient } from './server';

export const getServerSession = async (): Promise<Session | null> => {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();
  return data.session;
};

export const getCurrentUser = async (): Promise<User | null> => {
  const session = await getServerSession();
  return session?.user ?? null;
};

export const getSupabaseAdminClient = () => supabaseAdminClient;
