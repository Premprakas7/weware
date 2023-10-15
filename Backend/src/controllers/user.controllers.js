const express=require("express");
const router=express.Router();
const User=require("../models/user.model");


router.get("", async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
})

router.post("", async(req,res)=>{
    try {
        const user=await User.create().lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const users=await User.findById(req.params.id).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})


module.exports=router