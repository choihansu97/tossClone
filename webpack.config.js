const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
    mode: "none",
    entry: {
        index: path.resolve(__dirname, "src", "index.js"),
        router: path.resolve(__dirname, "src", "router.js"),
    },

    output: {
        path: path.resolve(__dirname, "src", "dist"),
        filename: "[name].js",
        publicPath: "/src/dist/",
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src", "public", "index.html"),
            inject: 'body',
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};
