import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    '@ant-design/icons',
    "rc-picker",
    "rc-util",
    "@babel/runtime", // Transpile this dependency
  ],
};

export default nextConfig;

