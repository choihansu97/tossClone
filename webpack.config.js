const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "src", "index.js"),
        msw: path.resolve(__dirname, "src", "mocks", "mswServer.js"),
    },

    output: {
        path: path.resolve(__dirname, "src", "dist"),
        filename: "[name].js",
        publicPath: "/src/dist/",
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "public", "index.html"),
            inject: 'body',
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        }),
        new MiniCssExtractPlugin({
            filename: 'default.css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
