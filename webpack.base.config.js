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
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const os = require('os')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 }) // 指定线程池个数
const devMode = process.env.NODE_ENV !== 'production'
const fontAwesomePath = path.join(
    __dirname,
    './node_modules/font-awesome/css/font-awesome.css'
);
const fetchPath = path.join(
    __dirname,
    './node_modules/whatwg-fetch/fetch.js'
);
const fetchJsonpPath = path.join(
    __dirname,
    './node_modules/fetch-jsonp/build/fetch-jsonp.js'
);
const jqueryPath = path.join(
    __dirname,
    './node_modules/jquery/dist/jquery.js'
);
const momentPath = path.join(
    __dirname,
    './node_modules/moment/moment.js'
);

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
const APP_INDEX_FILE = resolve('./app/index.js');

const webpackConfigBase = {
    entry:{
        commons : ['react', 'react-dom', 'react-redux', 'react-router-dom', 'immutable', 'redux-thunk', 'redux-actions', 'redux'],
        index : [
            'whatwg-fetch',
            'fetch-jsonp',
            APP_INDEX_FILE
        ]
    },
    output: {
        path: resolve('./dist'),
        publicPath: '/',
        filename: devMode ? '[name].libs.js' : '[name].[contenthash].js',
        chunkFilename: devMode ? '[id].chunk.js' : '[id].[contenthash].js'
    },
    context: __dirname,
    resolve: {  
        extensions: ['*', '.less', '.css', '.js', '.jsx', '.json'],
        alias: { // 减少使用别名提高编译速速
            '@app': path.join(__dirname, './app'),
            '@actions': path.join(__dirname, './app/redux/actions'),
            '@reducers': path.join(__dirname, './app/redux/reducers'),
            '@apis': path.join(__dirname, './app/apis'),
            '@components': path.join(__dirname, './app/components'),
            '@configs': path.join(__dirname, './app/configs'),
            '@config': path.join(__dirname, './app/configs/config.data.js'),
            '@ajax': path.join(__dirname, './app/configs/ajax.js'),
            '@regular': path.join(__dirname, './app/configs/regular.config.js'),
            '@images': path.join(__dirname, './app/images'),
            '@styles': path.join(__dirname, './app/styles'),
            jQuery: jqueryPath,
            fetch: fetchPath,
            fetchJsonp: fetchJsonpPath,
            moment: momentPath,
            fontAwesome: fontAwesomePath,
            'react-dom': devMode ? '@hot-loader/react-dom' : 'react-dom' // react-hot-loader需要
        },
    },
    optimization: {
        usedExports: true,
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: "all", // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
            minSize: 30000, // 模块超过30k自动被抽离成公共模块
            minChunks: 1, // 模块被引用>=1次，便分割
            name: false, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
            automaticNameDelimiter: '~', // 命名分隔符
            cacheGroups: {
                default: { // 模块缓存规则，设置为false，默认缓存组将禁用
                    minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
                    priority: -20, // 优先级
                    reuseExistingChunk: true, // 默认使用已有的模块
                },
                "draft-js": {
                    test: /[\\/]node_modules[\\/]draft-js/,
                    name: 'draft-js',
                    priority: 18,
                    reuseExistingChunk: true,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    priority: -10, // 确定模块打入的优先级
                    reuseExistingChunk: true, // 使用复用已经存在的模块
                    enforce: true,
                }
            },
        },
    },
    module: {
        // noParse: /lodash/,
        rules: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: [resolve('./app')],
                use: 'happypack/loader?id=happyBabel'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode,
                            reloadAll: devMode,
                        }
                    },
                    'happypack/loader?id=happyStyle'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './css',
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                sourceMap: true,
                                paths: [resolve("./node_modules"), resolve("./app")],
                                strictMath: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                            modules: {
                                namedExport: true,
                            }
                        }
                    },
                    'happypack/loader?id=happyScssStyle'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attributes: false,
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /node_modules/,
                include: [resolve('./app/images')],
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:4].[ext]',
                    outputPath: './images'
                }
            },
            {
                test: /\.(ico|icon)(\?.*)?$/,
                exclude: /node_modules/,
                include: [resolve('./app/images/icon')],
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:4].[ext]',
                    outputPath: './images/icon'
                }
            },
            {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './fonts/[name].[hash:4].[ext]'
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    performance: false,
    plugins: [
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: devMode ? 'css/style.css' : 'css/[name].[contenthash].css',
            chunkFilename: devMode ? 'css/style.[id].css' : 'css/style.[chunkhash].[id].css'
        }),
        new FriendlyErrorsPlugin(),
        new webpack.ProvidePlugin({
            moment: 'moment',
            $: 'jQuery',
            jquery: 'jQuery',
            jQuery: 'jQuery',
            'window.jQuery': 'jQuery'
        }),
        new HappyPack({
            id: 'happyBabel',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool,
            verbose: false
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyScssStyle',
            //如何处理  用法和loader 的配置一样
            loaders: ['css-loader', 'postcss-loader', 'sass-loader'],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyLessStyle',
            //如何处理  用法和loader 的配置一样
            loaders: ['css-loader', 'postcss-loader', "less-loader" ],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyStyle',
            //如何处理  用法和loader 的配置一样
            loaders: ['css-loader', 'postcss-loader'],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
}

if (devMode) {
    webpackConfigBase.plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = webpackConfigBase;