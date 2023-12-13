import mongoose from "mongoose";

const academicYearSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    formYear:{
        type:Date,
        required:true
    },
    toYear:{
        type:Date,
        required:true
    },
    isCurrent:{
        type:Boolean,
        default:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true
    },
    students:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Student',
        }
    ],
    teachers:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Teacher'
        }
    ]

},{
    timestamps:true
})

const AcademicYear=mongoose.model('AcademicYear',academicYearSchema);

export default AcademicYear;