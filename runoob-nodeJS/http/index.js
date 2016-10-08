var http = require("http");

http.createServer(function(request,reponse){
  reponse.writeHead(200,{"Content-Type":"text/plain"});
  reponse.end("返回200,title为text/plain");
}).listen(3000);

console.log("服务器运行在3000端口");
