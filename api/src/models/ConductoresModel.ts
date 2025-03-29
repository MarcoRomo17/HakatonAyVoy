import { model, Schema } from "mongoose";
import { IConductor } from "../GlobalTypes";

const conductoresEsquema= new Schema<IConductor>({
    name:{
        type: String,
        required:true
    },
    ap:{
        type:String,
        required:true
    },
    am:{
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
    ruta:{
        type : Schema.Types.ObjectId,
        ref:"RUTA",// hacia donde apunta
        
    },
    puntos:{
        type : Number,
        required:true
    },
    esAdmin:{
        type : Boolean,
        required:true
    }
})

export const conductorModel= model("CONDUCTORES", conductoresEsquema)
