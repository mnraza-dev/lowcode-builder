const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
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
      name: "shell",
      remotes: {
  
         canvas: "canvas@http://localhost:3001/remoteEntry.js",
  components: "components@http://localhost:3002/remoteEntry.js",
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
