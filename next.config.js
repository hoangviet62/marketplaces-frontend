/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    appName: 'Golden Phoenix',
    apiUrl: 'http://159.223.35.212:8000',
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
