module.exports = {
  pageExtensions: ["tsx"],
  generateBuildId: () => "build-id",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          options: { mode: ["react-component"] },
        },
      ]
    );
    return config;
  },
};
