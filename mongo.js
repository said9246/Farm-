const { default: mongoose } = require("mongoose");
const express=require("mongoose");
mongoose.connect("mongodb+srv://Said:Said123@project1.8tk2tfy.mongodb.net/myform").then(()=>{
        console.log("mongoose is connected")
})
.catch((e)=>{
        console.log("conection Failed")
});

const signupSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    })
    
    const SignupCollection=new mongoose.model('myform',signupSchema)
    
    module.exports=SignupCollection
