'use client';

import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '/dashboard', active: true },
  { label: 'Companies', href: '/dashboard/companies' },
  { label: 'Claims', href: '/dashboard/claims', badge: '42' },
  { label: 'Disputes', href: '/dashboard/disputes' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Settings', href: '/dashboard/settings' },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <aside className={`dashboard-sidebar ${open ? 'dashboard-sidebar-open' : ''}`}>
      <div className="sidebar-brand">
        <div>
          <p className="brand-title">TradeTrust</p>
          <p className="brand-subtitle">Credit intelligence</p>
        </div>
        <Button variant="ghost" size="small" onClick={onToggle}>
          {open ? 'Hide' : 'Menu'}
        </Button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`sidebar-link ${item.active ? 'active' : ''}`}
          >
            <span>{item.label}</span>
            {item.badge ? <Badge variant="subtle">{item.badge}</Badge> : null}
          </a>
        ))}
      </nav>

      <div className="sidebar-footnote">
        <p>Enterprise-grade support for textile trade teams.</p>
      </div>
    </aside>
  );
}
