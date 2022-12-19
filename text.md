#### JAVA SCRIPT
   
   java script and mongodb will be in src folder.
 
 >CODE FOR THE JAVA SCRIPT:-


```
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
  it will check that whether given name and password is present or not in database
    if present then if condition will be executed else it will return false

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

it will used to connect port to express server

app.listen(3000,()=>{
console.log(' port 3000 connected ');
})

```
 
#### MONGODB:

 >CODE FOR MONGODB:-

   ```

   const mongoose=require('mongoose') 

mongoose.connect("mongodb://localhost:27017/login")

.then(()=>{
console.log('Connected to MongoDB');
})

.catch((err)=>{
console.log('Failed to connect to MongoDB');
}) 

 ```
 >**mongodb cheatsheet table:-**

 |command |   use    |
 |------|------|
 |show dbs|to show all databases|
 |db|shows current database|
 |use acme|switch or create database|
 |db.dropDatabase()|grop a database|
 |db.docx.findOne()|Finds one random document.|
 |db.docx.find().prettyPrint()	|Finds all documents.|
 |db.docx.find({}, {name:true, _id:false})	|Displays only the names of the document Docx.|
 |db.docx.find({}, {name:true, _id:false})	|Can find one document by attribute among many documents.|



 >**finding documentusing operaters**



|operater| description|commands|
|-----|------|-----|
|$gt |	greater than |	db.docx.find({class:{$gt:'T'}|
|$gte |	greater than equals	|db.docx.find({class:{$gt:'T'}|
|$lt 	|lesser than 	|db.docx.find({class:{$lt:'T'}|
|$lte	|lesser than equals|	db.docx.find({class:{$lte:'T'}|
|$exists|	does an attribute exist or not|	db.docx.find({class:{$gt:'T'}|
|$regex|	Matching pattern in pearl-style	|db.docx.find({name:|{$regex:'^USS\\sE'}})
|$type 	|search by type of an element	|db.docx.find({name : {$type:4}})

####HTML

folder name :public

>1)    home page
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <h1>Home</h1>  
</body>
</html>
```
>2.  login page     
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<h2>Log In</h2>
<form action="/login" method="post"> 
<input type="text" name="name" placeholder="Name">
<input type="Password" name="Password" placeholder="Password">
<input type="submit"    >
</form>
<a href="/signup">Makw a new account</a>
</body>
</html>
```
>3. sign-up   page

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<h2>Sign Up</h2>
<form action="/signup" method="post"> 
<input type="text" name="name" placeholder="Name">
<input type="Password" name="Password" placeholder="Password">
<input type="submit"    >
</form>
</body>
</html>
```





     
	
