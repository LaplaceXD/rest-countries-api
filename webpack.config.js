const PATH = require("path");
const WEBPACK = require("webpack");
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const BABEL_MINIFY_WEBPACK_PLUGIN = require("babel-minify-webpack-plugin");
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin");
const AUTOPREFIXER = require("autoprefixer");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[hash].js",
        path: PATH.resolve(__dirname, "dist"),
    },
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx"],
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [MINI_CSS_EXTRACT_PLUGIN.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            { test: /\.html$/, use: "html-loader" },
            { test: /\.(png|gif|jpe?g|svg)$/, use: "file-loader" },
        ],
    },
    plugins: [
        new HTML_WEBPACK_PLUGIN({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new BABEL_MINIFY_WEBPACK_PLUGIN(
            {},
            {
                comments: false,
            }
        ),
        new WEBPACK.LoaderOptionsPlugin({
            options: {
                postcss: [AUTOPREFIXER()],
            },
        }),
        new MINI_CSS_EXTRACT_PLUGIN({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css",
        }),
    ],
};
