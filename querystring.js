/*

<--------!!!!!! NOT USED IN THIS PROJECT !!!!!!!!!---------->

Request handler class has all this code and does the work.

*/
var querystring = require("querystring");

function start(response, postData) {
  console.log("Request Handler Start was called");

  var body = '<html>' +
  '<head>'+
  '<meta http-equiv = "Content-Type" content = "text-html; ' +
  'charset = UTF-8" />' +
  '</head>' +
  '<body>' +
  '<form action = "/upload" method = "post">' +
  '<textarea name = "text" rows = "30" cols = "100"></textarea>' +
  '<input type = "submit" value = "submit text">' +
  '</form>' +
  '</body>' +
  '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request Handler for 'UPLOAD' was called");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("the data sent by you is : " + querystring.parse(postData).text);
  response.end();
}

exposrts.start = start;
exports.upload = upload;
