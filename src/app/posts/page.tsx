import { redirect } from 'next/navigation';
import { FILE_TREE_LIST } from './const';

export default function PostPage() {
  // 使用第一个文章的 slug 作为默认值
  const defaultSlug = FILE_TREE_LIST[0]?.slug;
  if (!defaultSlug) {
    throw new Error('No posts found');
  }
  redirect(`/posts/${defaultSlug}`);
}
