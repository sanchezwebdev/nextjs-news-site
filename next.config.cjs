/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  webpack: (config, { isServer }) => {
    config.stats = 'verbose';
    config.optimization.splitChunks = {
      chunks: 'all',
    };
    if (!isServer) {
      config.parallelism = 1;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/vdnl4md1xpsv/**',
      },
    ],
  },
};
