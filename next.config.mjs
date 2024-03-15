import nextMDX from "@next/mdx";
 
const withMDX = nextMDX({
  extension: /\.mdx?$/,
});
 
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
 
export default withMDX(nextConfig);