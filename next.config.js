const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [
      'localhost',
      'picsum.photos',
      'demo.themesberg.com',
      'i.ibb.co',
      'images.unsplash.com',
      'res.cloudinary.com',
    ],
  },
})
