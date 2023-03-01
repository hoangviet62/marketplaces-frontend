/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    appName: 'Golden Phoenix',
    apiUrl: 'http://159.65.142.241:8000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '159.65.142.241',
        port: '8000',
        pathname: '/public/**',
      },
    ],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
