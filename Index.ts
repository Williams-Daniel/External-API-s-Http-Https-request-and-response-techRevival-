import http from "http"
import https from "https"


const port:number = 4455
const URL:string =  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
const app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "application/json"})
    const {method,url} = req
    if(method === "GET" && url === "/"){
        console.log(https)

        https.get(URL,(response)=>{
            let body = "" 
            response.on("data",(chunk)=>{
                body += chunk
            })

            response.on ("end",()=>{
                let result = JSON.parse(body).url
                res.end(JSON.stringify(result))
            })
        })
    }
})

app.listen(port,()=>{
    console.log("Server is listening on port: ", port)
})