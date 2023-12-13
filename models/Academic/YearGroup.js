import mongoose from "mongoose";

const yearGroupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    }
},{
    timestamps:true
})


const YearGroup=mongoose.model('YearGroup',yearGroupSchema);

export default YearGroup