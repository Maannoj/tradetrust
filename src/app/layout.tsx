import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'TradeTrust | Textile Trade Credit Intelligence',
  description:
    'TradeTrust is the premium credit intelligence platform for textile wholesalers, saree manufacturers, and fabric traders.',
  openGraph: {
    title: 'TradeTrust',
    description:
      'Premium B2B trade credit intelligence for textile wholesalers and distributors.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
