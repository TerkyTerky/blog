import Footer from '@/components/global-component/footer'
import { Header } from '@/components/global-component/header'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'
import './globals.css'

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Header />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
