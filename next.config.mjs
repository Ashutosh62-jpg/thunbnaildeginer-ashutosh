/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "gsap",
    "lenis",
  ],

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  turbopack: {},
};

export default nextConfig;