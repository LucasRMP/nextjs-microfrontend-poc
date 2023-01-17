const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, options) {
    const moduleFolder = options.isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        filename: `static/${moduleFolder}/remoteEntry.js`,
        remotes: {
          home: `home@${process.env.NEXT_PUBLIC_HOME_MODULE_ORIGIN}/_next/static/${moduleFolder}/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};
