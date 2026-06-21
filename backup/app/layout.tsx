import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
