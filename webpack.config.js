const path = require('path');

module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
