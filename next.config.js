/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["seeklogo.com", "aiimagegenerator12b915e8.blob.core.windows.net"]
  }
};

module.exports = nextConfig;
