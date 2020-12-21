/* eslint-disable no-undef */
const htmlplugins = require("html-webpack-plugin")
const copyplugin = require("copy-webpack-plugin")



module.exports = {
    entry: "./src/main.js",
    plugins: [new htmlplugins({ template: "./index.html" }),
        new copyplugin({
            patterns: [{
                from: "css",
                to: "css"
            }]
        })
    ],
    devServer: {
        historyApiFallback: true,
    },
    devtool: "eval-source-map"
}