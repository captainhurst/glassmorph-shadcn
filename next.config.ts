import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isProd && repo ? `/${repo}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
