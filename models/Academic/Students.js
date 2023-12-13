import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:{
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
    },
    StudentId:{
        type:String,
        required:true,
        default:function(){
            return (
                "STU"+
                Math.floor(100+Math.random()*900)+
                Date.now().toString().splice(2,4)+
                this.name
                .split(" ")
                .map(name=>name[0])
                .join("")
                .toUpperCase()
            )
        }
    },
    isWithdrawn:{
        type:Boolean,
        default:false
    },
    isSuspended:{
        type:Boolean,
        default:false 
    },
    role:{
        type:String, 
        default:"Student"
    },
    classLevel:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ClassLevel',
        required:true
    }],
    currentClassLevel:{
        type:String,
        default:function(){
            return this.classLevel[this.classLevel.length-1]
        }
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
    examResults:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ExamResult" 
    }],
    program:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Program",
        required:true
    }],
    isPromotedToLevel200:{
        type:Boolean,
        default:false
    },
    isPromotedToLevel300:{
        type:Boolean,
        default:false
    },
    isPromotedToLevel400:{
        type:Boolean,
        default:false
    },
    isGraduated:{
        type:Boolean,
        default:false
    },
    perfectName:{
        type:string
    },
    yearGraduated:{
        type:String
    }
},{
    timestamps:true
})

const Student=mongoose.model('Student',studentSchema);

export default Student;