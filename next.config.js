/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/mc/:path*',
        destination: 'http://localhost:8899/mc/:path*',
      },
    ]
  },
}

module.exports = nextConfig
