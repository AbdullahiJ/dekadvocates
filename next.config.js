/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Domain',
            value: 'dekaadvocates.com',
          },
        ],
      },
    ]
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig 