const Path = require("path");
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.common.config.js')
const Webpack = require('webpack');

const dest = Path.join(__dirname, '../www');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: dest,
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js)$/,
      //   include: Path.resolve(__dirname, '../src'),
      //   exclude: Path.resolve(__dirname, '../src/assets'),
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   options: {
      //     emitWarning: true,
      //   }
      // },
      // {
      //   test: /\.(js)$/,
      //   include: Path.resolve(__dirname, '../src'),
      //   use  : ['babel-loader']
      // },
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s?css$/i,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  }
});