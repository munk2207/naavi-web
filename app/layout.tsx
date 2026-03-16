import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naavi — Life Orchestration for Active Seniors',
  description:
    'Naavi is an intelligent companion that connects your calendar, health portal, notes, and smart home — so you spend less time managing tools and more time living.',
  openGraph: {
    title: 'Naavi — Your life, orchestrated.',
    description:
      'An intelligent layer that connects your existing tools — calendar, health portal, notes, smart home — and does the daily coordination for you.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
