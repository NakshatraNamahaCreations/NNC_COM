// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // (If you later deploy to Vercel/Netlify’s Next adapter, you can remove this.)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],         // hint browsers to prefer modern formats
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.vectorstock.com' },
      { protocol: 'https', hostname: 'api.nakshatranamahacreations.in' },
    ],
     deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
  },

  // Modern-only build => trims “Legacy JavaScript” polyfills
  experimental: {
    legacyBrowsers: false,
    // Tree-shake big icon libs & friends
    optimizePackageImports: ['react-icons', 'lucide-react', 'framer-motion'],
  },

  // Good cache headers for static assets you *do* host
  async headers() {
    return [
      {
        // next static chunks
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // your own media (tune the path to what you actually use)
        source: '/media/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // fonts if you self-host any (optional; add a /fonts folder if you do)
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
