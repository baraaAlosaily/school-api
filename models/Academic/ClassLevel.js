import mongoose from "mongoose";

const classLevelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin',
        required:true
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student"
        }
    ],
    teacher:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"teacher",
        }
    ]
})


const ClassLevel=mongoose.model('ClassLevel',ClassLevel)

export default ClassLevel