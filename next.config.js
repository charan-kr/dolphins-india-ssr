const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    SERVER: isProd
      ? "https://dolphins-india-ssr.vercel.app"
      : "http://localhost:3000",
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "https://dolphins-india-ssr.vercel.app" : "",
  images: {
    loader: "imgix",
    path: isProd
      ? "https://dolphins-india-ssr.vercel.app"
      : "http://localhost:3000/",
  },
  reactStrictMode: true,
};
