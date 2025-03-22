import { Request, Response } from "express";
import { solicitudModel } from "../models/SolicitudModel";

export const registrarSolicitud= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {conductor,
            recompensa,
            fecha}=req.body;

        //Validar que venga todo:
        if(!conductor||
            !recompensa||
            !fecha){
            return res.status(400).json({
                msg:" faltan datos para registrar la solicitud"
            })                     //devolvemos un json
        }
            const estado = null
        const solicitudCreada= await solicitudModel.create({
            conductor,
            recompensa,
            estado,
            fecha
        })

        return res.status(200).json({msg:"Solicitud registrada con exito.",solicitudCreada})


    } catch (error) {
        console.log("Error alregistrar solicitud")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentarregistrar solicitud."})
    }
}

export const traertodasLasSolicitudes= async (req:Request, res: Response): Promise<any>=>{
    try {
        const todasLasSolicitudes =await solicitudModel.find().populate("conductor").populate("recompensa").exec()

        return res.status(200).json({msg:"Encontre :",todasLasSolicitudes})

    } catch (error) {
        console.log("Error al traer las solicitiudes")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentartraer las solicitiudes"})
    }
    
}

export const borrarSolicitud = async (req:Request, res: Response): Promise<any>=>{
    try {
        const {solicitudID} = req.body


        if(!solicitudID){
            return res.status(400).json({msg:"No se recibieron datos", solicitudID})
        }

        const conductorEliminado = await solicitudModel.deleteOne({_id:solicitudID})
        console.log("Se supoe elimine la del id", solicitudID)
        return res.status(200).json({msg:"Todo bien, ya la elimine"})


    } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
    }
}
