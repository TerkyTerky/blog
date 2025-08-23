import Footer from '@/components/global-component/footer';
import { Header } from '@/components/global-component/header';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NoCoffee',
  description: '好难猜啊真的好难猜啊',
};

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className=" flex-grow px-4">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
