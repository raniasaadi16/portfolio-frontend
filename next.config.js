module.exports = {
    env: {
      proxy: process.env.PROXY
    },
    images: {
      domains: ['drive.google.com','images.unsplash.com', 'res.cloudinary.com','firebasestorage.googleapis.com']
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/:path*',
        },
      ]
    },
  }