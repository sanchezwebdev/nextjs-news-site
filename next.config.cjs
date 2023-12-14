/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  cssModules: true,
  cssLoaderOptions: {
importLoaders: 1,
localIdentName: "[]",
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

