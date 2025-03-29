
import { Request, Response } from "express";
import { mensajeModel } from "../models/MensajeModel";
export const registrarMensaje= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {texto,
            ruta,
            conductor,
            fecha,
            coordenadas}=req.body;

        //Validar que venga todo:
        if(!texto||
            !ruta||
            !conductor||
            !fecha){
            return res.status(400).json({
                msg:" faltan datos para el mensaje"
            })                     //devolvemos un json
        }

        const mensajeData= await mensajeModel.create({
            texto,
            ruta,
            conductor,
            fecha,
            coordenadas
        })

        return res.status(200).json({msg:"mensaje enviado con exito.",mensajeData})


    } catch (error) {
        console.log("Error al registrar el mensaje")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentar registrar el mensaje."})
    }
}

export const mostarMensajesPorRuta= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {rutaID}=req.body;

        //Validar que venga todo:
        if(!rutaID){
            return res.status(400).json({
                msg:" faltan datos para el mensaje"
            })                     //devolvemos un json
        }

        const mensajesDeLaRuta= await mensajeModel.find({ruta:rutaID}).populate("conductor").exec()

        return res.status(200).json({msg:"mensaje enviado con exito.",mensajesDeLaRuta})


    } catch (error) {
        console.log("Error al traer los mensajes")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentartraer los mensajes"})
    }
}

export const todosLosMensajes= async (req:Request, res: Response): Promise<any>=>{
    try {
 

        const mensajesDeLaRuta= await mensajeModel.find().populate("conductor")

        return res.status(200).json({msg:"mensaje enviado con exito.",mensajesDeLaRuta})


    } catch (error) {
        console.log("Error al traer los mensajes")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentartraer los mensajes"})
    }
}

