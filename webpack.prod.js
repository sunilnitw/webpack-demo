const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpackCleanPlugin = require('clean-webpack-plugin')
module.exports = merge(common, {
    mode: 'production', // Set the Mode, like production or development, default production
    //devtool: 'none', // remove the eval from generate code
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new webpackCleanPlugin()]
});