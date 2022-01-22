// const http = require('http')
// const port = 2030;
// const server = http.createServer((req, res)=>{
//     res.end("server")
// });
// server.listen(port, ()=>{
//     console.log("listening on port " +port)
// });


import React, {useState} from 'react'
const App =()=>{
  const[counter,setCounter]=useState(0)
  const words = ["God is good", "As you lay your bed","Man no be God","I dont want to waste your time Dont waste my time"," Hard and smart work pays"];
  const next =()=>{
    setCounter(counter+1)
    if(counter=== 5)
    setCounter(5)
 
  };
  const prev =()=>{
    setCounter(counter-1)
    if(counter===0)
    setCounter(0)
  }
  return(
    <div style ={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      height:"100vh",
      backgroundColor:'skyblue',
      borderRadius:"5px"
    }}>
      <div>
        <div style ={{
          height:"50vh",
          width:"100%",
          border: "solid 1px solid",
          borderRadius: "5px",
          backgroundColor:"blue",
          color:"white",
          display: "flex",
          alignItems:"center",
          justifyContent:"center",
          fontFamily:"sans-serif",
          fontSize:"23px",
          textAlign:"center",
          }}>
            {words[counter % words.length]}
          </div>

          <div style={{
            display: "flex",
            justifyContent:"center",
            width:"303px"
            
          }}>
            
            <button onClick={prev} style={{
              height:"20px",
              width:"50px",
              backgroundColor:"green",
              color:"white",
              border:"none",
              margin:"5px",
              borderRadius:"5px",

            }}> PREV</button>
            <button onClick={next} style={{
              height:"20px",
              width:"50px",
              backgroundColor:"green",
              color:"white",
              border:"none",
              margin:"5px",
              borderRadius:"5px"}} > NEXT</button>
          </div>


      </div>
    </div>
  )
}
export default App;
