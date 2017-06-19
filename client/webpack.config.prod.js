var path = require('path');
module.exports = {
    entry: "./index.js",
    devtool: 'source-map',
    output: {
        path: __dirname +'/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },

    devServer: {
        port: 8888
    }
}
