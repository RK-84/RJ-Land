/** @type {import('next').NextConfig} */
const nextConfig = {


  reactStrictMode: true,
  images: {
    unoptimized: true,

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "*.digikala.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "*.digikala.ir",
    //     port: "",
    //     pathname: "/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "*.technolife.ir",
    //     port: "",
    //     pathname: "/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "*.technolife.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "*.rjland.ir",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;
