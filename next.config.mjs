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

  webpack: (config) => {
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });
    return config;
  },
};

export default nextConfig;