const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function assetRule(extensions) {
    const regex = new RegExp("\\.(" + extensions.join('|') + ")$")
    return {
        test: regex,
        type: 'asset/resource',
        generator: {
            filename: `assets/[path]/[name][ext][query]`,
        },
    };
}

module.exports = {
    entry: {
        app: './src/index.ts',
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
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name]-[hash][ext][query]',
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx', '.json'],
        alias: {
            '@remvst/animate.js': path.resolve('./node_modules/@remvst/animate.js'),
            '@remvst/game-model': path.resolve('./node_modules/@remvst/game-model'),
            '@remvst/geometry': path.resolve('./node_modules/@remvst/geometry'),
            '@remvst/matrix': path.resolve('./node_modules/@remvst/matrix'),
            '@remvst/particles': path.resolve('./node_modules/@remvst/particles'),
            '@remvst/random': path.resolve('./node_modules/@remvst/random'),
            '@remvst/raycaster': path.resolve('./node_modules/@remvst/raycaster'),

            'pixi.js': path.resolve('./node_modules/pixi.js'),
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        },
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        },
        assetRule(['solution']),
        assetRule(['png']),
        assetRule(['ogg', 'wav', 'mp3']),
        assetRule(['ttf'])
        ],
    },
    optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
};
