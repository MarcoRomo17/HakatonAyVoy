import { Request, Response } from "express";
import { historialModel } from "../models/SolicitudModel";

export const registrarSolicitud= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {conductor,
            recompensa,
           estado,
            fecha}=req.body;

        //Validar que venga todo:
        if(!conductor||
            !recompensa||
            !estado||
            !fecha){
            return res.status(400).json({
                msg:" faltan datos para registrar el historial"
            })                     //devolvemos un json
        }
            
        const historialRegistrado= await historialModel.create({
            conductor,
            recompensa,
            estado,
            fecha
        })

        return res.status(200).json({msg:"Historial registrado con exito.",historialRegistrado})


    } catch (error) {
        console.log("Error alregistrar historial")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentarregistrar historial."})
    }
}

export const traerTodoHistorial= async (req:Request, res: Response): Promise<any>=>{
    try {
        const todoHistorial =await historialModel.find().populate("conductor").populate("recompensa").exec()

        return res.status(200).json({msg:"Encontre :",todoHistorial})

    } catch (error) {
        console.log("Error al traer el historial")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentartraer el historial"})
    }
    
}