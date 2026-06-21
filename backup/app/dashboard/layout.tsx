import type { Metadata } from 'next';
import { AppShell } from '../../components/layout/AppShell';
import '../../app/globals.css';

export const metadata: Metadata = {
  title: 'TradeTrust Dashboard',
  description: 'Enterprise dashboard shell for TradeTrust.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
