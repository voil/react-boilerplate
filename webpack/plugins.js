/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 08:49:31
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:58:20
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var loaders = require("./loaders");
var Bump = require("bump-webpack-plugin");
var OfflinePlugin = require("offline-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackPwaManifest = require("webpack-pwa-manifest");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// =============================================================================
// Create global variables.
// =============================================================================
var _root = __dirname + "/..";
var _description = JSON.stringify(require(_root + "/package.json").description);
var _title = JSON.stringify(process.env.APP_TITLE);
var config = {
  base: "/",
  hash: true,
  inject: "body",
  title: _title,
  template: "src/index.ejs",
  description: _description,
  favicon: "src/theme/images/favicon.ico",
  keywords: "platform, application, boilerplate"
};

if (process.env.ENV === "production") {
  config["filename"] = "../index.html";
}
// =============================================================================
// Array of plugins.
// =============================================================================
var plugins = [
  new webpack.ProvidePlugin({}),
  new HtmlWebpackPlugin(config),
  new OfflinePlugin({
    updateStrategy: "all",
    AppCache: false
  }),
  new webpack.DefinePlugin({
    __TITLE__: _title,
    __API_URL__: JSON.stringify(process.env.API_URL),
    __BULID__: JSON.stringify(require(_root + "/bulid.json").bulid),
    __VERSION__: JSON.stringify(require(_root + "/bulid.json").version),
    __DESCRIPTION__: _description,
    __DEVELOPMENT__: process.env.ENV === "development" ? true : false,
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.ENV)
    }
  })
];

if (process.env.ENV === "development") {
  plugins.push(
    new Bump(["../bulid.json"]),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  );
}
if (process.env.ENV === "production") {
  plugins.push(
    new CleanWebpackPlugin(["*"], {
      dry: false,
      verbose: true,
      root: _root + "/public/theme/"
    })
  );
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true,
      compress: {
        unsafe: true,
        warnings: false,
        screw_ie8: true,
        pure_getters: true,
        unsafe_comps: true
      },
      output: {
        comments: false
      },
      exclude: [/\.min\.(js|css|less|sass)$/gi]
    })
  );
  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  plugins.push(
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css|woff)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
  plugins.push(
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false })
  );
  plugins.push(loaders.extract);
  plugins.push(
    new WebpackPwaManifest({
      name: process.env.TITLE,
      short_name: process.env.TITLE,
      description: require(_root + "/package.json").description,
      background_color: require(_root + "/package.json").color,
      // icons: [
      //   {
      //     src: path.resolve("src/theme/images/icons/icon.png"),
      //     sizes: [96, 128, 192, 256, 384, 512]
      //   },
      //   {
      //     src: path.resolve("src/theme/images/icons/large-icon.png"),
      //     size: "1024x1024"
      //   }
      // ]
    })
  );
}

// =============================================================================
// Exporting plugins.
// =============================================================================
module.exports = plugins;
