// next.config.js
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack (config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {},
        },
      ],
    });
    return config;
  }
})