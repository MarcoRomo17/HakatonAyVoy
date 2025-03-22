import { model, Schema } from "mongoose";
import { IRecompensa } from "../GlobalTypes";

const recompensaEsquema = new Schema<IRecompensa>({
    concepto:{
        type:String,
        required:true
    },
    puntos:{
        type:Number,
        required:true
    }
})

export const recompensaModel=model("RECOMPENSA", recompensaEsquema)