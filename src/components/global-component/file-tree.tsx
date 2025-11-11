'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FileTreeProps {
  prefix?: string;
  fileTreeList: Array<{
    slug: string;
    title: string;
  }>;
}

export default function FileTree({
  prefix = '/posts',
  fileTreeList,
}: FileTreeProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-60 p-4 space-y-2">
      {fileTreeList.map((node) => {
        const isActive = pathname === `${prefix}/${node.slug}`;

        return (
          <Link
            key={node.slug}
            href={`${prefix}/${node.slug}`}
            className="block"
          >
            <div
              className={`cursor-pointer transition-colors ${
                isActive
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {node.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
