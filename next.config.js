/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // pastikan ini true untuk App Router
    },
    images: {
      domains: ['dprkp.jakarta.go.id'],
    },
    // reactDevOverlay: false
  };

module.exports = nextConfig
