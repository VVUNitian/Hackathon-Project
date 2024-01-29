const express= require("express");
const app=express();
const port=9090;
const path=require("path");
const  methodOverride = require('method-override');//always include these...require and

 app.use(methodOverride('_method'));//app.use for every package imported.
 app.use(express.urlencoded({extended: true}));//used to parse urlencoded data...

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>{
    console.log("Listening on port 9090");
});

// app.get("/",(req,res)=>{
//      console.log("Server working perfectly..");
//      res.send("Hello this is my webserver");
//  });
 

app.get("/homepage",(req,res)=>{
    res.render("homepage.ejs");
});

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.get("/dashboard", (req,res) => {
    res.render("dashboard.ejs");
});

