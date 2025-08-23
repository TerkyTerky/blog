import { Ampersand } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between py-4 px-10">
      <div>
        <Link className="flex items-center space-x-2" href="/">
          <Ampersand size={32} color="#3c66c8" />
          <span className="font-bold text-xl">NoCoffee</span>
        </Link>
      </div>
      <div className="flex space-x-4">
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
          <span className="italic">Docs</span>
        </Link>
      </div>
    </div>
  )
}
