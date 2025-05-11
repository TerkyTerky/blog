import Link from 'next/link'
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
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex">
            <Link href="/" className="hover:text-gray-300">
              首页
            </Link>
            <Link href="/interview" className="hover:text-gray-300">
              面经
            </Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 My Personal Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
