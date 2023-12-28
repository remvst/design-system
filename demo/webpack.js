const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: './src/index.tsx',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app'],
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name]-[hash][ext][query]',
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx', '.json'],
        alias: {
            '@remvst/design-system': path.resolve('./node_modules/@remvst/design-system'),
        },
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        }],
    },
};
