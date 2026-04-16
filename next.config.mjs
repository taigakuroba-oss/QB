/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prd.resource-api.lit.link",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
