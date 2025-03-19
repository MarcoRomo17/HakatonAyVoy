//Crea Elimina Consulta y actualiza

import { Request, Response } from "express";
import { rutaModel } from "../models/RutaModel";

export const registrarRuta= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {numeroRuta}=req.body;

        //Validar que venga todo:
        if(!numeroRuta){
            return res.status(400).json({
                msg:" faltan datos para crear la ruta"
            })                     //devolvemos un json
        }

        const rutaCreada= await rutaModel.create({
         numeroRuta
        })

        return res.status(200).json({msg:"ruta creada con exito."})


    } catch (error) {
        console.log("Error al crear la ruta")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentar crear ruta."})
    }
}



export const traerRuta= async (req:Request, res: Response): Promise<any>=>{
    try {
     
        const  { rutaID} = req.body
        console.log("Recibo el id", rutaID)
       
        
          if(!rutaID){
              return res.status(400).json({msg:"No se recibieron datos", rutaID})
          }
  
          const RutaEncontrarda = await rutaModel.find({_id: rutaID})
          return res.status(200).json({msg:"Todo bien, encontre", RutaEncontrarda})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const traerTodasRutas= async (req:Request, res: Response): Promise<any>=>{
    try {
     
          const TodasLasRutas = await rutaModel.find()
          return res.status(200).json({msg:"Todo bien, encontre", TodasLasRutas})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const borrarRuta = async (req:Request, res: Response): Promise<any>=>{
    try {
        const {rutaID} = req.body


        if(!rutaID){
            return res.status(400).json({msg:"No se recibieron datos", rutaID})
        }

        const rutaEliminada = await rutaModel.deleteOne({_id:rutaID})
        console.log("Se supoe elimine la del id", rutaID)
        return res.status(200).json({msg:"Todo bien, ya la elimine"})


    } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
    }
}
