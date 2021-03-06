var webpack = require("webpack");
var path = require("path");

// Build directory is where the bundle file will be placed
var BUILD_DIR = path.resolve(__dirname, "client/dist");
// App directory is where all of your raw JSX files will be placed
var APP_DIR = path.resolve(__dirname, "client/src");

var config = {
  mode: "development",
  entry: APP_DIR + "/index.jsx",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/"
            }
          }
        ]
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   loader: "css-loader",
      //   query: {
      //     modules: true,
      //     localIdentName: "[name]__[local]___[hash:base64:5]"
      //   }
      // },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  }
};

module.exports = config;
