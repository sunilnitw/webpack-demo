const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: 'development', // Set the Mode, like production or development, default production
    //devtool: 'none', // remove the eval from generate code
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});