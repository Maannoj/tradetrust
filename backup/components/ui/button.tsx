import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'secondary' | 'gold';
  size?: 'default' | 'small' | 'large';
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  default:
    'bg-gold text-slate-950 hover:bg-[#d8b430] shadow-glow border border-transparent',
  ghost: 'bg-white/5 text-white hover:bg-white/10 border border-white/10',
  secondary: 'bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-700',
  gold: 'bg-[#c9a227] text-slate-950 hover:bg-[#d1b33c] border border-[#b08f1d]',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  default: 'h-12 px-6 py-3 text-sm',
  small: 'h-10 px-4 text-sm',
  large: 'h-14 px-7 text-base',
};

export function Button({ className = '', variant = 'default', size = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
