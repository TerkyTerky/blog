import { postFileTreeList } from '@/constants/file-tree-list'
import { redirect } from 'next/navigation'

export default function PostPage() {
  // 使用第一个文章的 slug 作为默认值
  const defaultSlug = postFileTreeList[0]?.slug
  if (!defaultSlug) {
    throw new Error('No posts found')
  }
  redirect(`/posts/${defaultSlug}`)
}
