import fs from 'fs'
import path from 'path'

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/markdown/posts/${slug}.mdx`)

  return <Post />
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/markdown/posts')
  const files = fs.readdirSync(contentDir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }))
}

export const dynamicParams = false
