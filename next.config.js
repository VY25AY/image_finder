const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;