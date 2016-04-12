let path = require("path"),
    webpack = require("webpack");

module.exports = {
  entry: {
    global: "./js/global",
    home: "./js/home",
    about: "./js/about",
    common: ['jquery']
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/public/',
    filename: "[name].js",
    chunkFilename: "[name]_[chunkhash].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "common" }),
    // Compress using built-in UglifyJs
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    //
    // Use the "production" flag to ditch dev-wrapped functionality
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css']
      }
    ]
  }
};
