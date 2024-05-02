import http from "http"
import https from "https"

const port:number = 4455

const app = http.createServer((req,res)=>{

})

app.listen(port,()=>{
    console.log("Server is listening on port: ", port)
})