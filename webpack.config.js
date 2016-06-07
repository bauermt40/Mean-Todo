var webpack = require('webpack');
var path = require('path');

module.export = {
    devtool: 'inline-source-map', //Output line numbers for debug
    entry: [ //where webpack should look for the entry file i.e. index.js
        'webpack-dev-server/client?http://127.0.0.1:8082',
        'webpack/hot/only-dev-server', //hot is live reloading
        './src'
    ],
    output: { //location of bundled app
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: { //where webpack should look for files
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js']
    },
    module: [{ 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015']
        }
    }],
    plugins: [
        new webpack.HotModulesReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }  
};