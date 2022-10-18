/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/e-commerce-product-page',
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
}

module.exports = withBundleAnalyzer(nextConfig);
