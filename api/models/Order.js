import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    paperFormat:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    academicLvl:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},
{ timestamps: true }
)

export default mongoose.model("Order", OrderSchema);