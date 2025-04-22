import Link from 'next/link'

export default function GlobalHeader() {
  return (
    <div>
      <nav className="flex">
        <Link href="/" className="hover:text-gray-300">
          首页
        </Link>
      </nav>
    </div>
  )
}
