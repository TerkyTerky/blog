import { Ampersand } from 'lucide-react'
import Link from 'next/link'
import { Input } from './input'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <Link className="flex items-center space-x-2" href="/">
          <Ampersand size={32} color="#3c66c8" />
          <span className="font-bold text-xl">NoCoffee</span>
        </Link>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md mx-auto">
            <Input />
          </div>
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <Link
              className="text-gray-700 hover:text-[#3c66c8] transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-700 hover:text-[#3c66c8] transition-colors"
              href="/posts"
            >
              Docs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
