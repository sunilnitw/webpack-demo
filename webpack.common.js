var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
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
    }
}