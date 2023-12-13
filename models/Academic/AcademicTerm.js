import mongoose from "mongoose";

const academicTermSchema=mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    duration:{
        type:String,
        required:true,
        default:"3 months"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true
    }
},{
    timestamps:true
});

const AcademicTerm=mongoose.model("AcademicTerm",academicTermSchema);

export default AcademicTerm;