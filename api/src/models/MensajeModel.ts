import { model, Schema } from "mongoose";
import { IMensaje } from "../GlobalTypes";

const mensajeEsquema= new Schema<IMensaje>({
    texto:{
        type:String,
        required:true
    },
    ruta:{
        type : Schema.Types.ObjectId,
        ref:"RUTA",// hacia donde apunta
        required:true
    },
    conductor:{
        type : Schema.Types.ObjectId,
        ref:"CONDUCTORES",// hacia donde apunta
        required:true
    },
    fecha:{
        type:String,
        required:true
    },
    coordenadas: { 
        latitude: { type: Number, required: false },
        longitude: { type: Number, required: false }
    }
})

export const mensajeModel= model("MENSAJE", mensajeEsquema)