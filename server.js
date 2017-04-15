/*var http = require("http");
http.createServere(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}).listen(8888);
*/
/*var http = require("http");
var url = require("url");
function start(route){
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recived.");

    route(pathname);

    //console.log("Request Recived");
    response.writeHead(200, {
      "Content-type": "text/plain"
    });
    response.write("'hello Node World!!");
    response.end();
  }
  http.createServer(onRequest).listen(8989);*/
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
      var postData = "";
      var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");
      request.setEncoding("utf8");
      request.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
        console.log("Recived POST data chunk '" + postDataChunk + "'.");
      });
      //route(handle, pathname);
      /*
      response.writeHead(200, {"Content-Type": "text/plain"});

      var content = route(handle, pathname)

      //response.write("Hello World");
      response.write(content);
      response.end();*/
      request.addListener("end", function() {
        route(handle, pathname, response, postData);
      });
    }
  http.createServer(onRequest).listen(8888);
  console.log("Server Has Started");
}
exports.start = start;
