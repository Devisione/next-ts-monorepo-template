/** @type {import('next').NextConfig} */
const nextConfig = {
  // это затянет все модули и похрен на тришейк
  transpilePackages: ["@project/ui-kit", "@project/auth"],
};

module.exports = nextConfig;
