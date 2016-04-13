var path              = require("path"),
    webpack           = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var appDir = path.join(__dirname, "src/client");
var npmRoot = path.join(__dirname, "node_modules");

module.exports = {
  entry: {
    app: "./src/client/app.js",
    polyfills: "./src/client/polyfills.ts",
    vendor: "./src/client/vendors.js"
  },

  output: {
    path: path.join(__dirname, "public", "assets"),
    filename: "[name].bundle.js"
  },

  plugins : [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor", "polyfills"],
      minChunks: Infinity
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      $:                "jquery",
      jQuery:           "jquery",
      "window.jQuery":  "jquery"
    })
  ],

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.sass/,
        exclude: /node_modules/,
        loader:
          ExtractTextPlugin.extract(
            'style-loader',
            'css-loader?sourceMap!sass-loader?indentedSyntax'
          )
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader:
          ExtractTextPlugin.extract(
            'style-loader',
            'css-loader?sourceMap!sass-loader'
          )
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
      },

      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },

  resolve : {
    // you can now require('file') instead of require('file.sass')
    extensions: ['', '.js', '.sass', '.ts', '.scss']
  },

  devtool: 'source-map'

};
