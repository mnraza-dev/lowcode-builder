const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "canvas",
      filename: "remoteEntry.js",
      exposes: {
        "./Canvas": "./src/Canvas",
      },
      shared: {
        react: {
          singleton: true,
            eager: true,
          requiredVersion: false,
        },
        "react-dom": {
          singleton: true,
            eager: true,
          requiredVersion: false,
        },
      },

      
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
