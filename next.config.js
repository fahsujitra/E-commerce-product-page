/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/e-commerce-product-page',
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
}

module.exports = nextConfig
