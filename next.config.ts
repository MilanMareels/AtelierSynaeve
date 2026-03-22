import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Verplicht bij 'output: export' tenzij je externe loaders gebruikt
  },
};

export default nextConfig;
