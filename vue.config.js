module.exports = {
  configureWebpack: (config) => {
    // SCSS
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "sass-loader",
        {
          loader: "style-resources-loader",
          options: {
            patterns: [
              "./src/assets/scss/abstracts/*.scss",
              "./src/assets/sass/abstracts/*/*.scss",
            ],
          },
        },
      ],
    });
  },
};
