
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


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
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },

    devServer: {
        inline: true,
        contentBase: './dist',
    },

    optimization: {
        minimize: true
    },

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['*', '.js', '.jsx']
    }
}