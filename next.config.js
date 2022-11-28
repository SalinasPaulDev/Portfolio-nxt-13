/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['yt3.ggpht.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig
