/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'dekaadvocates.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dekaadvocates.com',
      }
    ],
    unoptimized: true,
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
}

module.exports = nextConfig 