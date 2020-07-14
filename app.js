const express = require('express');
const app = new express();
const http = require('http').Server(app);

const port = process.env.PORT || 3000

app.get('/', function(request, response){
	response.statusCode = 200;
    response.sendFile(__dirname + '/index.html');
});

//const server = http.createServer((req, res) => {
 // res.statusCode = 200;
 // res.sendFile(__dirname + '/index.html');
  //res.setHeader('Content-Type', 'text/html');
  //res.end('<h1>Hello World</h1>');
//});

app.listen(port,() => {
  console.log(`Server running at port `+port);
});

