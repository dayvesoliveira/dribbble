var path = require('path');
module.exports = {
    entry: "./index.js",
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname ,'client'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    
    devServer: {
        port: 9999,
        proxy: {            
            "/client": {
                secure: false
            }
        }
    }
}
