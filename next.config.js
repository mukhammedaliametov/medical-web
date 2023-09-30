/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images:{
    domains:[
      'images.unsplash.com',
    ],
    remotePatterns: [
      {
        hostname:'cdn.sanity.io',
      },
    ],
  }
}
