/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: isProd ? '/accessibility-validator' : '',
  assetPrefix: isProd ? '/accessibility-validator/' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  // Note: rewrites() is not supported with output: 'export'.
  // The FastAPI backend (api/index.py) is accessed directly at http://127.0.0.1:8000
  // in development. See README.md for local dev setup instructions.
};

module.exports = nextConfig;
