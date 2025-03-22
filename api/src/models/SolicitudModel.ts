import { model, Schema } from "mongoose";
import { ISoliHis } from "../GlobalTypes";

const SolicitudEsquema = new Schema<ISoliHis>({
    conductor:{
        type:Schema.Types.ObjectId,
        ref:"CONDUCTORES",
        required:true
    },
    recompensa:{
        type: Schema.Types.ObjectId,
        ref:"RECOMPENSA",
        required:true
    },
    estado:{
        type: Boolean,
        required: false
    },
    fecha:{
        type:String,
        required:true
    },


})

//Creamos dos tablas a base del mismo esquema
export const solicitudModel = model("SOLICITUD", SolicitudEsquema)
export const historialModel= model("HISTORIAL", SolicitudEsquema)