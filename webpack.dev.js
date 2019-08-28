const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development', // Set the Mode, like production or development, default production
    //devtool: 'none', // remove the eval from generate code
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject style to the DOM
                    "css-loader", //2. Turn CSS to Common Js
                    "sass-loader" // 1. Turn SCSS to CSS
                ] //Order matters from end, css-loader, turn into javascript, 
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});