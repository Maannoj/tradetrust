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

export const requireUserSession = async (): Promise<Session> => {
  const session = await getServerSession();
  if (!session) {
    throw new Error('Authentication required');
  }
  return session;
};

export const requireUser = async (): Promise<User> => {
  const session = await requireUserSession();
  return session.user;
};

export const getSupabaseAdminClient = () => supabaseAdminClient;
