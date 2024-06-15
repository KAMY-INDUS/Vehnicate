/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'http://localhost:3000/',
            port: '3000',
            pathname: '/vehnicate/admin',
          },
        ],
      },
};

export default nextConfig;
