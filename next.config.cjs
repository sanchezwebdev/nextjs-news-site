/**
 * @type {import('next').NextConfig}
 */
import './patch-fs.js';

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
