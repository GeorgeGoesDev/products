/* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        // pathname: '/7uuqxrnmuccs/**',
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
