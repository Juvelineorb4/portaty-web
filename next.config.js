/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3bybus220215-dev.s3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/.well-known/assetlinks.json",
  //       destination: "/api/assetlinks",
  //     },
  //   ];
  // },
};
