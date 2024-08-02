// const express=require("express")
// const jwt = require("jsonwebtoken");

// const app=express();
// app.use(express.json())

// const users=[{
//     username:"sai",
//     password:"123",
//     name:"sai eshwar"
// },
// {
//     username:"krishna",
//     password:"456",
//     name:"gopi"
// },
// {
//     username:"adi",
//     password:"789",
//     name:"aditya"
// }]

// function usernameexists(username,password)
// {
//     for(let i=0;i<users.length;i++)
//     {
//         if(users[i].username===username && users[i].password===password) return true;
//     }
//     return false;
// }


// // app.get("/", (req, res) => {
// //     const username = req.body.username;
// //     const password = req.body. password;
// //     res.json({
// //         msg: "Hai ra"
// //     })
// // })

// app.post("/",function(req,res){
//     const username=req.body.username;
//     const password=req.body.password

//     if(!usernameexists(username,password))
//     {
//         res.status(403).json({
//             msg:"User not found"
//         })
//     }

//     let token=jwt.sign({username:username},"123456");
//      res.json({
//         token
//     })

// })


// app.get("/",function (req,res){
//     const token=req.headers.auth;
//     const resp=jwt.verify(token,"123456")

//     res.json({
//         users:resp.username
//     })


// }
// )



// app.listen(3000);

const cors=require('cors')
const express=require('express');
const app=express();

app.use(cors())
app.get("/",function(req,res){
  const a=req.query.a;
  const b=req.query.b;
  const c=parseInt(a)+parseInt(b);
  res.send(c.toString());
})


app.get("/interest",function(req,res){
    const p=parseInt(req.query.p);
    const t=parseInt(req.query.t)
    const r=parseInt(req.query.r);
    const si=(p*t*r)/100;
    res.send(si.toString());
  })
  
app.listen(3000);
