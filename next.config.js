/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    appName: 'Golden Phoenix',
    apiUrl: 'my-value',
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
