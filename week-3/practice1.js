const express=require("express")

const app=express();
// // let count=0;

// // function calculate(req,res,next)
// // {
// //     if(count>4) return;
// //     count++;
// //     console.log(count);
// //     next();
// // }
// // app.use(calculate)
// // app.use(express.json());

// // app.post("/",function(req,res)
// // {
// // const kidneys=req.body.kidneys;
// // const kidneylength=kidneys.length;
// // res.send("you have "+kidneylength+" kidneys")
// // })

// // app.use(function (err,req,res,next)
// // {
// // res.json({
// //     msg:"something with your inputs"
// // })
// // })
// const zod=require("zod")

// const schema=zod.array(zod.number())
// app.post("/",express.json(),function (req,res)
// {
// const kidneys=req.body.kidneys
// const response=schema.safeParse(kidneys)
// if(!response.success)
//     {
//         res.status(411).json({
//             msg:"Wrong inputs"
//         })
//     }
//     else
//     {
//         res.json({
//             response
//         })
//     }
// })
// app.listen(3000)


const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://saieshwar:root@cluster0.taogvs7.mongodb.net/mydb");

app.use(express.json())
const Users=mongoose.model('Users',{username:String,password:String})
app.post("/",async function(req,res)
{
    const username=req.body.username;
    const password=req.body.password;

    const existinguser=await Users.findOne({username:username})
        if(existinguser)
        {
            res.status(403).send({
                msg:"Existing User"
            })
            return ;
        }
    const user=new Users({username:username,password:password})
    user.save();
    res.json({
        msg:"Data updated"
    })
})

app.listen(3000)
