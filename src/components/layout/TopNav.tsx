'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function TopNav() {
  return (
    <header className="dashboard-topnav">
      <div className="topnav-left">
        <Input className="topnav-search" placeholder="Search companies, claims, disputes" />
      </div>
      <div className="topnav-right">
        <Button variant="ghost">Notifications</Button>
        <Button variant="ghost">Profile</Button>
      </div>
    </header>
  );
}
