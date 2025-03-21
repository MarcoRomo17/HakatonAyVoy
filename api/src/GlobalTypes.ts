import { Schema } from "mongoose";


export interface IConductor {
    name: string;
    ap:string;
    am:string;
    email: string;
    password: string;
    ruta:Schema.Types.ObjectId | string;//decimos que es de tipo object ID o de string se suppone es para saber cual tiene en turno
    puntos:number;
}

export interface IRuta{
    numeroRuta: string;
    
    
}

export interface IMensaje{
    texto:string;
    ruta: Schema.Types.ObjectId | string;//decimos que es de tipo object ID o de string
    conductor: Schema.Types.ObjectId | string;//decimos que es de tipo object ID o de string
    fecha: Date | string;
}

//Para solicitudes y recompensas
export interface ISoliHis{
    conductor: Schema.Types.ObjectId | string;
    recompensa:Schema.Types.ObjectId | string;
    estado: boolean;
    fecha:Date | string;
}

//Las recompensas

export interface IRecompensa{
        concepto: String;
        puntos: number;
}