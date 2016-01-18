var path      = require("path");
var webpack   = require("webpack");

module.exports = {
  watch: true,
  entry: {
    app: "./src/client/app.js",
    vendor: ["./src/client/vendors.js"]
  },

  output: {
    path: path.join(__dirname, "build", "assets"),
    filename: "[name].bundle.js"
  },

  plugins : [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
      },
      {
        test: /\.(png|jpg)/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192' // inline base64 images <=8K images
      }
    ]
  },

  resolve : {
    // you can now require('file') instead of require('file.sass')
    extensions: ['', '.js', '.sass']
  },

  devtool: 'source-map'

};
