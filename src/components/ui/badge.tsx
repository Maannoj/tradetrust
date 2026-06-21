import * as React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'subtle';
}

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-gold text-slate-950',
  subtle: 'bg-white/5 text-slate-100 border border-white/10',
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${badgeStyles[variant]} ${className}`} {...props} />
  );
}
