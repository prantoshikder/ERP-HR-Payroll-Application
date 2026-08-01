import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rewrite barrel imports (`import { Button } from "antd"`) to deep imports so
  // a page only pulls the components it actually renders into the first load.
  experimental: {
    optimizePackageImports: ["antd", "react-icons"],
  },
};

export default nextConfig;
