const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    publicPath: "http://localhost:8001/",
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "form_step",
      filename: "remoteEntry.js",
      remotes: {
        form_registration: "form_registration@http://localhost:8000/remoteEntry.js",
      },
      exposes: {
        "./Step": "./src/Step",
      },
      shared:
        {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        }
  }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Development',
    }),
  ],
  devServer: {
    port: 8001,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
