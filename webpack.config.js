const path = require('path');

module.exports = {
    mode: 'development', // Set the Mode, like production or development, default production
    //devtool: 'none', // remove the eval from generate code
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}