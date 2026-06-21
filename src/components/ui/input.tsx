import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-gold focus:ring-2 focus:ring-gold/20 ${className}`}
      {...props}
    />
  );
}
