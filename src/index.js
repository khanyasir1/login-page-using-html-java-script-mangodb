const express=require('express')
const app= express()
const path=require('path')
const hbs=require('hbs')
 const collection=require("./mongodb")

const tempelatePath=path.join(__dirname,'../tempelates')

 app.use(express.json()) 
app.set('view engine','hbs')
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
   res.render("login")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
 })

app.post("/signup",async (req,res)=>{

    const data={
        name: req.body.name,
        password: req.body.password
    }

   await collection.insertMany([data])
    res.render("home") 
})
 
app.post("/login",async (req,res)=>{  
  //it will check that whether given name and password is present or not in database
    //if present then if condition will be executed else it will return false

   try{
    const check=await collection.findOne({name:req.body.name})
    if(check.password===req.body.password){
        res.render("home")
    }
else{
        res.render("wrong password")
    
}
    res.render("home")  
   }
catch{
res.resend("wrong details")
}  
})

//it will used to connect port to express server


app.listen(3000,()=>{
console.log(' port 3000 connected ');
})

