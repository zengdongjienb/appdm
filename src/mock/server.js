const http = require('http');
const server = http.createServer();

server.on('request',function(req,res){
console.log('req :',req,'res :',res)
console.log('收到客户端请求')
})

server.listen(8080,()=>{
console.log('server run on "http://127.0.0.1:8080"')
})
// update