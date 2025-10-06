// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: [
      'cdn.vectorstock.com',
      'api.nakshatranamahacreations.in',
      'res.cloudinary.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        // ✅ Apply caching headers only to static assets
        source: '/:path*\\.(avif|webp|jpg|jpeg|png|gif|svg|js|css|woff2|woff|ttf)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // ✅ Add light security headers (safe defaults)
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
