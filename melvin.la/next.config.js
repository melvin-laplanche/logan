// next.config.js
let env = {};

try {
  env = require("./env.js");
} catch {
  // it's fine, data might be loaded from the env
}

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {},
        },
      ],
    });
    return config;
  },
  env: {
    ...env,
  },
};
