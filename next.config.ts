import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/.well-known/farcaster.json",
  //       destination:
  //         "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e9d-6395-f695-eacb-80dd54e202aa",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
