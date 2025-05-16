import NavBar from '@/components/nav-bar'
import { Analytics } from '@vercel/analytics/next'
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
        <NavBar />
        <main className="p-4">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
