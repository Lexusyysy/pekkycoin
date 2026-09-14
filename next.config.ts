import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactstrictmode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
};

export default nextConfig;
