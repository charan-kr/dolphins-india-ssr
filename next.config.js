const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    SERVER: isProd ? "https://cdn.mydomain.com" : "http://localhost:3000",
  },
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
  images: {
    loader: "imgix",
    path: "https://localhost:3000/",
  },
  reactStrictMode: true,
};
