/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan blok 'images' di sini
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Anda bisa menambahkan hostname lain di sini di masa depan
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      // },
    ],
  },
};

module.exports = nextConfig;