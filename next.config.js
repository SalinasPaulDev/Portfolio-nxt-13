/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**googleapis.com/**'

      }
    ]
  },

  reactStrictMode: true
}

module.exports = nextConfig
