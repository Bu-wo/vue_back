// 请求
let http = require('http')

let users = [
    {id:1,name:'zhuce1'},
    {id:2,name:'zhuce2'},
    {id:3,name:'zhuce3'},
    {id:4,name:'zhuce4'}
]
//接口实例
let server = http.createServer(function(req,res){
    //解决跨域
    res.setHeader("Access-Control-Allow-Origin","*")
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users));
    }else{
        res.end('Not Found')
    }
})

//监听端口3000
server.listen(3000,()=>{
    console.log('后端服务器已经启动在:3000端口')
})
//访问接口:localhost:3000/api/users
