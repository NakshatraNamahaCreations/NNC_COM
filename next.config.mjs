// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    unoptimized: true, // 👈 disables Next.js image optimization
    domains: ['cdn.vectorstock.com', 'api.nakshatranamahacreations.in'],
 }
};

export default nextConfig;
