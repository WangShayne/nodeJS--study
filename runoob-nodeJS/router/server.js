var http = require("http");
var url = require("url");

exports.do = function(route){
  http.createServer(function(request,reponse){
    var pathname = url.parse(request.url).pathname;
    route(pathname);
  }).listen(8888)
}
