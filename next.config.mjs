import createMDX from '@next/mdx'
import withPlugins from 'next-compose-plugins'
import withRspack from 'next-rspack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: { mdxRs: false },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kunkun-img.oss-cn-shanghai.aliyuncs.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withPlugins([[withMDX], [withRspack]], nextConfig)
