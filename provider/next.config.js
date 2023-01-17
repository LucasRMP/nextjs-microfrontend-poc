const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const config = {
  webpack(config, options) {
    const moduleFolder = options.isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: `static/${moduleFolder}/remoteEntry.js`,
        exposes: {
          "./components/header": "./src/components/Header",
        },
      })
    );

    return config;
  },
};

module.exports = config;
