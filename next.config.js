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
  transpilePackages: ['three'],
  reactStrictMode: true
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = nextConfig
