import createMDX from '@next/mdx'
import withPlugins from 'next-compose-plugins'
import withRspack from 'next-rspack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: { mdxRs: false },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withPlugins([[withMDX], [withRspack]], nextConfig)
