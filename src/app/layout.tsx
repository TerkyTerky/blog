import GlobalHeader from '@/components/global-header'
import React from 'react'

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <header className="bg-gray-800 text-white p-4">
          <GlobalHeader />
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 My Personal Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
