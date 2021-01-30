'use strict';
/**
 *
 *          ┌─┐       ┌─┐
 *       ┌──┘ ┴───────┘ ┴──┐
 *       │                 │
 *       │       ───       │
 *       │  ─┬┘       └┬─  │
 *       │                 │
 *       │       ─┴─       │
 *       │                 │
 *       └───┐         ┌───┘
 *           │         │
 *           │         │
 *           │         │
 *           │         └──────────────┐
 *           │                        │
 *           │                        ├─┐
 *           │                        ┌─┘
 *           │                        │
 *           └─┐  ┐  ┌───────┬──┐  ┌──┘
 *             │ ─┤ ─┤       │ ─┤ ─┤
 *             └──┴──┘       └──┴──┘
 *
 *        神兽保佑 （神兽来源与网络） 代码无BUG!
 *
 **/
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const Copy = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require("terser-webpack-plugin");
const CompressWebpackPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfigProd = {
    mode: 'production',
    output: {
        publicPath: './',
    },
    devtool: 'cheap-module-souce-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: 4, // 开启多进程压缩
                terserOptions: {
                    compress: {
                        // 删除所有的 `console` 语句
                        drop_console: true,
                    },
                    myCustomOption: true,
                },
                // Can be async
                minify: (file, sourceMap, minimizerOptions) => {
                    // The `minimizerOptions` option contains option from the `terserOptions` option
                    // You can use `minimizerOptions.myCustomOption`
                    const extractedComments = [];

                    // Custom logic for extract comments

                    const { map, code } = require('uglify-module') // Or require('./path/to/uglify-module')
                        .minify(file, {
                            /* Your options for minification */
                        });

                    return { map, code, extractedComments };
                },
            }),
        ]
    },
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            IS_DEVELOPMETN: false,
        }),
        new CompressWebpackPlugin({
            test: /\.(js|css)$/, // 压缩js和css
            threshold: 10240, // 达到10k才启用，资源过小没必要，而且解压也是有损耗
            minRatio: 0.6 //压缩最小比例下限
            // 其他参数使用默认
        }),
        // 将打包后的资源注入到html文件内    
        new HtmlWebpackPlugin({
            // inject: true, // will inject the main bundle to index.html
            template: resolve('./app/index.html'),
            // mapConfig:'http://192.168.0.1/map_config.js',
            // 这里列出要加入html中的js文件  注释不用dll
            dlls: [
                // './resource/dll/vendor.dll.js',
                // './resource/dll/redux.dll.js',
            ],
        }),
        // 分析代码
        new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        new Copy([
            // { from: './app/resource/dll', to: '../dist/resource/dll' },
        ]),
        new OptimizeCSSAssetsPlugin(),
        new CleanWebpackPlugin()
    ],
}

module.exports = merge(webpackConfigBase, webpackConfigProd)