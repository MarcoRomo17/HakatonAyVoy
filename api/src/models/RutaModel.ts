import { model, Schema } from "mongoose";
import { IRuta } from "../GlobalTypes";

const rutaEsquema= new Schema<IRuta>({
    numeroRuta:{
        type:String,
        required:true
    }
})

export const rutaModel= model("RUTA", rutaEsquema)