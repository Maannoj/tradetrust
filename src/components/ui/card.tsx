import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl ${className}`} {...props} />
  );
}
