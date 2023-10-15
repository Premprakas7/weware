const express=require("express");
const userController=require("./controllers/user.controllers");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use("/users",userController)
app.use(cors())

module.exports=app;