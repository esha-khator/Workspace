const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = function (env, argv) {

  let config = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index-bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$|scss/,
          use: ["style-loader", "css-loader"],
        },
        {
          // config for images
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
              },
            },
          ],
        },
        {
          // config for fonts
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              //name: '[name].[ext]',
              outputPath: 'fonts',
              esModule: false
            }
          }
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: "./public/favicon.ico",
        template: "./src/index.html",
        minify: {
          collapseWhitespace: true,
        },
      }),
      new Dotenv({
        path: `./.env.${env === "production" ? "production" : "development"}`,
      }),
      new CopyPlugin({
        patterns: [
          { from: "public/assets", to: "public/assets" },
          { from: "public/manifest.json", to: "public/manifest.json" },
          { from: "public/robots.txt", to: "./" },
          { from: "public/favicon.ico", to: "public/favicon.ico" },
        ],
      }),
    ],
  };
  config.devtool = "eval-cheap-module-source-map'";
  return config;
};