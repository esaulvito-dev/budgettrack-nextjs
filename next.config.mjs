/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.readdy.ai' },
      { protocol: 'https', hostname: 'app.budgettrack.site' },
      { protocol: 'https', hostname: 'readdy.ai' },
    ],
  },
};
export default nextConfig;
