import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname:string = '127.0.0.1';
const port:number = 3000;

// indica uma funcao tipo http.server
const server: http.Server = http.createServer((req, res) => { 
  res.setHeader('Content-Type', 'text/html');
  displayHome(res);
});

const baseURL: string = 'http://' + hostname + ':' + port;

server.listen(port, hostname, () => {
  console.log('Server running at ', baseURL);
});

function displayHome(res:http.ServerResponse): void {

  fs.readFile("index.html", (err, data) =>
  {
    if(err) {
      res.writeHead(404);
      res.end("ERROR :404 - Page not found at moment ");
      console.log("Error");
      return;
    } else {
      res.writeHead(200);
      res.end(data);
    } 
  }
);
}

