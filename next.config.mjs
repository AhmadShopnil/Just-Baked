/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
  images: {
    domains: ["mathmozocms.test", "justbakedbd.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "http://justbakedbd.com/api/v1/login", // Direct (no v1)
      },
      {
        source: "/api/:path*",
        destination: "http://justbakedbd.com/api/v1/:path*", // All others
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
