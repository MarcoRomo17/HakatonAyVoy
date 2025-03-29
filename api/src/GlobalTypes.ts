import { Schema } from "mongoose";


export interface IConductor {
    name: string;
    ap:string;
    am:string;
    email: string;
    password: string;
    ruta:Schema.Types.ObjectId | string;//decimos que es de tipo object ID o de string se suppone es para saber cual tiene en turno
    puntos:number;
    esAdmin:Boolean;
}
export interface IRuta{
    numeroRuta: string;
    coordenadas: ICoordenada
    
}

interface ICoordenada {
    latitude: number;
    longitude: number;
}

export interface IMensaje{
    texto:string;
    ruta: Schema.Types.ObjectId | string;//decimos que es de tipo object ID o de string
    conductor: Schema.Types.ObjectId | string;//decimos que es de tipo object ID o de string
    fecha: Date | string;
    coordenadas: ICoordenada;
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


export interface IHorario {
    conductor: Schema.Types.ObjectId | string;
    ruta: String;
    horario: String;
}