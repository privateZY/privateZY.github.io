/**
 * @description webpack 配置
 * @author kerry
 */
var webpack = require('webpack')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')


var _package = require('./package.json')



module.exports = {
    entry: {
        app: __dirname + '/src/app/main.js',
        vuecore: __dirname + '/src/app/vuecore.js'
    },
    output: {
        path:__dirname + '/dist'+ _package.publicPath,
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: 'js/[name]_[chunkhash:8].js',
        // 「入口分块(entry chunk)」的文件名模板（出口分块？）
        chunkFilename: 'js/[name]_[chunkhash:8].js',
        publicPath: _package.publicPath
        // 输出解析文件的目录，url 相对于 服务
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.js$/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{    
            test: /\.scss$/,
            // loader: 'css-loader!sass-loader'
            //将scss文件单独打包成css以<link>的方式引入页面 style-loader!css-loader!sass-loader
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=18192&name=./images/[hash:8].[name].[ext]'
        },
        {
            test: /\.(svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader:'file-loader?name=./style/fonts/[hash:8].[name].[ext]'
        }]
    },
    resolve: {
        alias: {
            VUEX: path.resolve(__dirname, './src/app/model/memory'),
            VIEW: path.resolve(__dirname, './src/app/view'),
            UTIL: path.resolve(__dirname, './src/app/util'),
            SERVICE: path.resolve(__dirname, './src/app/service')
        }
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'APP_ENV': JSON.stringify(process.env.NODE_ENV),
            'APP_VERSION': JSON.stringify(_package.version)
        }),
        new webpack.ProvidePlugin({
            'Vue': ['vue', 'default'],
            'Service': [__dirname +'/src/app/service/index.js', 'default']
        }),

        //CommonsChunkPlugin 插件，负责将多次被使用的 JS 模块打包在一起
        // new webpack.optimize.CommonsChunkPlugin({ 
        //     names: ['manifest','vuecore'].reverse()
        // }),
        // new CopyWebpackPlugin([{   //作用：把public 里面的内容全部拷贝到编译目录
        //     from:'src/app/view/assets/images',
        //     to: 'images'
        // }]),
        new InlineManifestWebpackPlugin(),
        new ExtractTextPlugin('style/app_[chunkhash:8].css'), // css抽取
        new HtmlWebpackPlugin({
            title:'Beaf plus',
            template:'index.ejs', //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            chunks: ['vuecore','app', 'manifest'],
            // hash:true,
            // chunksSortMode: 'dependency'
            inject:"boby",
            // minify: {
            //     collapseWhitespace: true
            // }
        })
        
    ]
}