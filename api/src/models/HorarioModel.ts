import { model, Schema } from "mongoose";
import { IHorario } from "../GlobalTypes";

const horarioEsquema = new Schema <IHorario>({
    conductor:{
        type:Schema.Types.ObjectId,
        ref:"CONDUCTORES",
        required:true
    },

    ruta: {
        type: String, 
        required: true
    },

    horario: {
        type: String,
        required: true
    }
})

export const horarioModel = model("HORARIO", horarioEsquema)