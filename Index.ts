import http from "http"
import https from "https"

const port:number = 4455

const app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "application/json"})
    const {method,url} = req
    if(method === "GET" && url === "/"){
        console.log(https)

        res.end(JSON.stringify(https))
    }
})

app.listen(port,()=>{
    console.log("Server is listening on port: ", port)
})