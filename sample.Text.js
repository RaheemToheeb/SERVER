const http = require ("http")
const port  = 2043;
const app = http.createServer((req, res)=>{
    res.end("Raheem Toheeb is a software Engineer")
});
app.listen(port, ()=>{
    console.log("listening on port" +port);
});
