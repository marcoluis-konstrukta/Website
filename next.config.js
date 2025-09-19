/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/seo',      // 👈 change '/app' to your Webflow mount path
  assetPrefix: '/seo',   // 👈 change '/app' to your Webflow mount path
}

module.exports = nextConfig



// import type { NextConfig } from "next"; // Removed because it's only valid in TypeScript files

import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
});

