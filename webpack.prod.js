/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { web } = require("webpack")
const { merge } = require("webpack-merge")
const config = require("./webpack.config.js")

module.exports = merge(config, { mode: "production" })