// next.config.js
const withSass = require('@zeit/next-sass')
let env = {}

try {
  env = require('./env.js');
} catch {
  // it's fine, data might be loaded from the env
}

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
  },
  env: {
    ...env,
  }
})