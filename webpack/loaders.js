/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 08:49:18
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 10:55:47
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// =============================================================================
// Create global variables.
// =============================================================================
let _root = `${__dirname}/..`;
const extractCSS = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: false,
  allChunks: true,
});

// =============================================================================
// Array of loaders.
// =============================================================================
let Loaders = [
  {
    test: /\.html$/,
    use: {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
      },
    },
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          strictMath: true,
          noIeCompat: true,
        },
      },
    ],
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
  },
  {
    test: /\.sass$/,
    use:
      process.env.ENV === 'production'
        ? extractCSS.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  `${_root}/src/theme/styles/mixins.sass`,
                  `${_root}/src/theme/styles/defs/colors.sass`,
                ],
              },
            },
          ],
        })
        : [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                `${_root}/src/theme/styles/mixins.sass`,
                `${_root}/src/theme/styles/defs/colors.sass`,
              ],
            },
          },
        ],
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file-loader',
      {
        loader: 'image-webpack-loader',
        query: {
          mozjpeg: {
            quality: 65,
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
          optipng: {
            optimizationLevel: 7,
          },
          pngquant: {
            quality: '0-10',
            speed: 10,
          },
        },
      },
    ],
  },
  {
    test: /\.json$/,
    loader: 'json-loader',
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
  },
  {
    test: /\.(ttf|otf|eot|svg?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
  },
];

// =============================================================================
// Exporting loaders.
// =============================================================================
module.exports = {
  loaders: Loaders,
  extract: extractCSS,
};
