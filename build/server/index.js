var http = require('http')
var fs = require('fs')
var path = require('path')
//url解析模块
var url = require('url')
var mine = require('./types.js')  //content-type格式
module.exports = function (port) {
	var subPath = ''
	var server = http.createServer(function(req,res){
		//req,res均为对象，req是http.IncomingMessage的一个实例，res是http.ServerResponse的一个实例
		var requestUrl = req.url
		//浏览器输入localhost:8899/station/index.html, 那url == '/station/index.html'
		var type = path.extname(requestUrl)  //path.extname 返回路径中文件的扩展名

		var pathName = url.parse(requestUrl).pathname

            //对请求的路径进行解码，防止中文乱码
            pathName = decodeURI(pathName)
		
		//获取资源文件的相对路径
		var filePath = path.resolve(__dirname,"/publish/lanfancekids/dist"+pathName)
		
		console.log(filePath,pathName)
		fs.readFile(filePath , function(err,data){
			if(err){
				console.log('访问'+req.url+'出错');
				res.writeHeader(404,{
					'content-type' : 'text/html;charset="utf-8"'
				});
				res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
			}else{
				res.writeHeader(200,{
					'content-type' :  'text/html;charset="utf-8"'
				});
				console.log(data)
				res.write(data);  //将index.html显示在浏览器（客服端）
			}
			res.end()
		})
	})
    server.listen(port, function () {
		console.log("[HttpServer][Start]","runing at http://localhost:"+ port+"/station/index.html")
        // console.timeEnd("[HttpServer][Start]")
	})
	server.on("error", function(error) {
		if (error.code === 'EADDRINUSE') { // 端口已经被使用
			console.log('error:The port【' + port + '】 is occupied, please change other port.')
		} else {
			console.error(error);
		}
	})
}