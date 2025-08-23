import { fileTreeList } from '@/constants/file-tree-list';
import Link from 'next/link';

export default function Bullshit() {
  return (
    <div className="flex gap-8 p-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">MDX 文档目录</h1>
        <p className="text-gray-600 mb-6">
          在左侧选择一篇文章查看内容，或点击下面的条目直接打开。
        </p>

        <div className="space-y-3">
          {fileTreeList.map((item) => (
            <Link key={item.slug} href={`/posts/${item.slug}`}>
              <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-500">/posts/{item.slug}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
