const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    img:{type:String, required:true}
},{
    versionKey: false,
    timestamps:true
})

module.exports=mongoose.model("user", userSchema)