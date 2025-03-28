//Crea Elimina Consulta y actualiza

import { Request, Response } from "express";
import { recompensaModel } from "../models/RecompensaModel";


export const registrarRecompensa= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {concepto,puntos}=req.body;
        console.log(`Recibo ${concepto} y ${puntos}`)

        //Validar que venga todo:
        if(!concepto||
           ! puntos){
            return res.status(400).json({
                msg:" faltan datos para registrar la recompensa"
            })                     //devolvemos un json
        }
   

        const recompensaRegistrada= await recompensaModel.create({
            concepto,
            puntos
        })

        return res.status(200).json({msg:"Recompensa registrada con exito.", recompensaRegistrada})


    } catch (error) {
        console.log("Error al registrar la recompensa")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentar registrar la recompensa."})
    }
}

export const traerUnaRecompensa= async (req:Request, res: Response): Promise<any>=>{
    try {
     
        const  { recompensaID} = req.body
        console.log("Recibo el id", recompensaID)
       
        
          if(!recompensaID){
              return res.status(400).json({msg:"No se recibieron datos", recompensaID})
          }
  
          const recompensaEncontrada = await recompensaModel.findOne({_id: recompensaID})
          return res.status(200).json({msg:"Todo bien, encontre", recompensaEncontrada})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const traerRecompensasTodas= async (req:Request, res: Response): Promise<any>=>{
    try {
     
          const todasLasRecompensas = await recompensaModel.find()
          return res.status(200).json({msg:"Todo bien, encontre", todasLasRecompensas})
  
      } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const borrarRecompensa = async (req:Request, res: Response): Promise<any>=>{
    try {
        const {recompensaID} = req.body


        if(!recompensaID){
            return res.status(400).json({msg:"No se recibieron datos", recompensaID})
        }

        const recompensaEliminada = await recompensaModel.deleteOne({_id:recompensaID})
        console.log("Se supoe elimine la del id", recompensaID)
        return res.status(200).json({msg:"Todo bien, ya la elimine"})


    } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
    }
}



export const editarRecompensa= async (req:Request, res: Response): Promise<any>=>{
    try {
        
        const {concepto,
            puntos,
            recompensaID}=req.body;
 
        console.log("Hola soy el id de la recompensa", recompensaID)
       
        
        if(!concepto||
            !puntos||
            !recompensaID){
            return res.status(400).json({
                msg:" faltan datos para editar al conductor"
            })                     //devolvemos un json
        }

        const filter={
            _id: recompensaID
        }

        const update={
            concepto:concepto,
            puntos:puntos
        }
  
          const recompensaActualizada = await recompensaModel.findOneAndUpdate(
            filter,
             update, 
             { new: true } )
          return res.status(200).json({msg:"Todo bien, actualice", recompensaActualizada})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}
