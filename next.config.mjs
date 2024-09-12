/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Allows all HTTPS domains; you can restrict this to specific domains for better security
          },
        ],
      },
};

export default nextConfig;
