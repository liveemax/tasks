const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

const domainOne = http.createServer((req, res) => {
    let file="index.html"
    const jsFile="index.js"
    res.writeHead(200,{'Content-type':'text/html'})
    if(req.url===`/${jsFile}`){
        res.writeHead(200,{'Content-type':'text/javascript'})
        file=jsFile
    }
    res.statusCode = 200;
    fs.readFile(__dirname+`\\${file}`,(err,data)=>{
        if(err){
            res.statusCode = 404
            res.end('Resourse not found!')
        }
        res.write(data)
            res.end()
    })
});

domainOne.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});