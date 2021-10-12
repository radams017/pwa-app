const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./assets/js/index.js",
    db: "./public/db.js",
    model: "./models/transaction.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: "Dave Ramsey's 'Don't Buy A New Car' Budget Tracker Deluxe",
      short_name: "DRBudget",
      description:
        "An application that allows you to track all of your expenses, necessary and unnecessary.",
      background_color: "#eeeeee",
      theme_color: "#76a5af",
      "theme-color": "#76a5af",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-192x192.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
};

module.exports = config;
