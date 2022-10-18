/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const basePath = '/e-commerce-product-page';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    basePath: basePath,
  },
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
}

module.exports = withBundleAnalyzer(nextConfig);
