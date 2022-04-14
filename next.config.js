/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  assetPrefix: isProd ? "/golkar/" : "",
}

module.exports = nextConfig
