
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    context: __dirname,
    entry: [
        './app/src/scripts/index',
    ],

    output: {
        path: path.resolve('./app/assets/scripts/bundles/'),
        filename: 'app.main.js',
        publicPath: '/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
        new BundleTracker({filename: './webpack-stats.json'}),
        new HtmlWebpackPlugin({
            template: './app/html/index.html'
          }),
        /* new CopyWebpackPlugin([
            { from: './app/assets/' }
        ]) */
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ],
    },

    devServer: {
        inline: true,
        contentBase: './dist',
        
        // Development server
        open: true, // to open the local server in browser
        contentBase: __dirname + '/src',
        historyApiFallback: true,
    },

    devtool: 'source-map',

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['*', '.js', '.jsx']
    }
}