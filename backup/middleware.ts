import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from './lib/supabase/middleware';

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};

export async function middleware(req: NextRequest) {
  return await requireAuth(req, {} as NextResponse);
}
