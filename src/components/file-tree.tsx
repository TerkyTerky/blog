import { fileTreeList } from '@/constants/file-tree-list'
import Link from 'next/link'

export default function FileTree() {
  return (
    <div className="flex flex-col w-56 p-4 space-y-2">
      {fileTreeList.map((node) => (
        <Link key={node.slug} href={`/posts/${node.slug}`}>
          <div className="text-gray-500 cursor-pointer hover:text-black">
            {node.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
