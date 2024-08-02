const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const arr=[{
  name:'john',
  kidneys:[
    {
      healthy:false
    }
  ]
}]


app.get("/",function(req,res){
    const totakidneys=arr[0].kidneys.length
    let healthykidneys=0;
    let unhealthykidneys=0;
    for(let i=0;i<arr[0].kidneys.length;i++)
    {
      if(arr[0].kidneys[i].healthy==true) healthykidneys++;
      else if(arr[0].kidneys[i].healthy==false) unhealthykidneys++;
    }

    res.json({
      totakidneys,
      healthykidneys,
      unhealthykidneys
    })
})

app.post("/",function(req,res){
  const kidtype=req.body.ishealthy;
 arr[0].kidneys.push({healthy:kidtype});
  res.send("Done")
})

app.put("/",function(req,res){
    for(let i=0;i<arr[0].kidneys.length;i++)
    {
      arr[0].kidneys[i].healthy=true;
    }
    // console.log(arr[0].kidneys);
    res.send("Replaced with all healthy kidneys");
})

app.delete("/",function(req,res){

  const obj=[]
  for(let i=0;i<arr[0].kidneys.length;i++)
  {
    if(arr[0].kidneys[i].healthy==true)
      obj.push(arr[0].kidneys[i]);
  }
  arr[0].kidneys=obj;
  // console.log(arr[0].kidneys);
  res.send("Removed all unhealthy kidneys");
})


app.listen(port)