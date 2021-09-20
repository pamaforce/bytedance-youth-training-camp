const http = require('http')
const fs = require('fs').promises

http.createServer((request, response) => {
    if (request.url === "/" && request.method === "GET") {
        fs.readFile("Node.js.html").then((data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end(data)
        }).catch(() => {
            response.writeHead(500, { 'Content-Type': 'text/plain;charset:utf-8' })
            response.end('500 服务器出问题啦w(ﾟДﾟ)w')
        })
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain;charset:utf-8' })
        response.end('404 找不到你要的东西Ծ‸Ծ')
    }
}).listen(3000, () => {
    console.log('实例运行在: http://localhost:3000');
})