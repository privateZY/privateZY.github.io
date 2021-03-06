var webpack = require('webpack')
var merge = require('webpack-merge')
var opn = require('opn')
var colors = require('colors')
var NyanProgressPlugin = require('nyan-progress-webpack-plugin')
// var spawn = require('child_process').spawn
var shell = require('shelljs')
var babel = require('babel-core')
var config = require('../webpack.config.js')
// var BrowserSync = require('browser-sync-webpack-plugin')
var _package = require('../package.json')
var app = require('./server/index.js')

var env = getArgv()
var port = env.port || 8899
var mock = env.mock || false
var toshell = false
var webpackConfig = merge.smart(config, {
    watch: true,
    watchOptions:{
        poll:true
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'APP_MOCK': JSON.stringify(mock),
            'APP_PORT': JSON.stringify(port)
        }),
        new NyanProgressPlugin()
    ]
})


webpack(webpackConfig, (err, status) => {
    if (err) throw err

    // spawn('flow', {
    //     stdio: 'inherit',
    //     shell: true
    // }).on('exit', function(code, err) {
    //     console.log(colors.green('flow logs =============='), '\n\n')
    // })

    process.stdout.write(status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
    console.log(toshell)
    if (!toshell) {
        createPromise(port).then( res => {
            if (!toshell) opn('http://localhost:' + port+_package.publicPath + 'index.html')
            toshell = true
            console.log(res)
        })
    }
})

function createPromise (port) {
    return new Promise( (res, rej) => {
        app(port)
        res('启动中。。。')
        
    })
}

// shell.exec('yarn check --integrity', {async: true}, function(status) {
//   if(status != 0) {
//     shell.echo(colors.red('***********'))
//     shell.echo(colors.red('本地 node_modules 模块 与 yarn.lock 中版本不匹配'))
//     shell.echo(colors.red('请执行 yarn upgrade 命令更新包'))
//     shell.echo(colors.red('***********'))
//     shell.exit(1)
//   }
// })

/**
 * [getArgv 获取npm run 中的参数]
 * @return {[type]} [description]
 */
function getAllArgv() {
    var argv
    try {
        argv = JSON.parse(process.env.npm_config_argv).original
    } catch (ex) {
        argv = process.argv
    }
    return argv.slice(2)
}
/**
 * [getPort 获取端口]
 * @return {[]} [undefined || port]
 */
function getArgv() {
    var argv = getAllArgv(), port, mock 
        tokens = ['-p','mock']
            
    // console.log(argv)
    tokens.forEach((key)=>{
        var index = argv.indexOf(key)
        if(~index){
            '-p' == key && (port = argv[index+1])
            'mock'  == key && (mock = true)
        }
    })
    
    // console.log({port,mock})
    return {port, mock}
}