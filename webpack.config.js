var webpack = require('webpack');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: './src',
        filename: "dist.js",
        sourceMapFilename: 'dist.map'
    },
    module: {
        loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          loaders: ["style", "css"]
        }, {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }, {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?name=./dist_files/[hash].[ext]&limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader?name=./dist_files/[hash].[ext]"
        }]
    },
    devtool: 'source-map',
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
