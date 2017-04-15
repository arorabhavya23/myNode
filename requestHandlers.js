//var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response, postData){
  console.log("Request handler 'start' was called");

  var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+
      'charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/upload" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+
      '<input type="submit" value="Submit text" />'+
      '</form>'+
      '</body>'+
      '</html>';
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

/*  function sleep(milisecond) {
     var startTime = new Date().getTime();
     while(new Date().getTime() < startTime + milisecond);
  }

  sleep(10000);*/
//  return "Hello Start";

  //var content = "empty";

/*exec("ls -lah", function (error, stdout, stderr) {
/*  exec("find /",
  { timeout: 10000, maxBuffer: 20000*1024 },
  function (error, stdout, stderr) {*/
    //content = stdout;
  //  response.writeHead(200, {"Content-Type": "text/plain"});
  //  response.write(stdout);
    //response.write("Hello start");
    //response.end();
//  });

  //return content;
//}
function upload(response, postData){
  console.log("Request handler 'upload' was called");
  //return "hello Upload";
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("Hello upload");
  //response.write("You've sent the text: " + postData);
  response.write("the data sent by you is : " + querystring.parse(postData).text);
  response.end();
}
exports.start = start;
exports.upload = upload;
