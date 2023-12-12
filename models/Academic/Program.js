import mongoose, { Schema } from "mongoose";

const programSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true,
        default:'4 years'
    },
    code:{
        type:String,
        default:function(){
            return(
                this.name.split(" ")
                .map(name=>name[0])
                .join("")
                .toUpperCase()+
                Math.floor(10+Math.random()*90)+
                Math.floor(10+Math.random()*90)
            )
        }
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        required:true
    },
    teachers:[
        {
            type:Schema.Types.ObjectId,
            red:"Teacher",
            default:[]
        }
    ],
    students:[
        {
            type:Schema.Types.ObjectId,
            red:"Student",
            default:[]  
        }
    ],
    subjects:[
        {
            type:Schema.Types.ObjectId,
            red:"Course",
            default:[]  
        }
    ]

},{
    timestamps:true
})

const Program=mongoose.model('Program',programSchema);
export default Program