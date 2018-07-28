const path = require('path');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['dist']),
    new UglifyJsWebpackPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'alanine.css',
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: 'alanine.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'alanine.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Alanine',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  devServer: {
    contentBase: './dist',
  },
};
