/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  serverComponentsExternalPackages: ["bcrypt"],
};

module.exports = nextConfig;
