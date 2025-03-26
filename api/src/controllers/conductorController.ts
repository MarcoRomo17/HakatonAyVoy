//Crea Elimina Consulta y actualiza

import { Request, Response } from "express";
import { conductorModel } from "../models/ConductoresModel";

export const registrarConductor= async (req:Request, res: Response): Promise<any>=>{
    try {
        const {name,
            ap,
            am,
            email,
            password,
            ruta}=req.body;

        //Validar que venga todo:
        if(!name||
            !ap||
            !am||
            !email||
            !password||
            !ruta){
            return res.status(400).json({
                msg:" faltan datos para registrar al conductor"
            })                     //devolvemos un json
        }


        const puntos= 0
   

        const conductorRegistrado= await conductorModel.create({
            name,
            ap,
            am,
            email,
            password,
            ruta,
            puntos
        })

        return res.status(200).json({msg:"usuario registrado con exito.", conductorRegistrado})


    } catch (error) {
        console.log("Error al registrar al conductor")
        console.log(error)
        return res.status(500).json({msg:"Fallo al intentar registrar al conductor."})
    }
}



export const traerUnConductor= async (req:Request, res: Response): Promise<any>=>{
    try {
     
        const  { conductorID} = req.body
        console.log("Recibo el id", conductorID)
       
        
          if(!conductorID){
              return res.status(400).json({msg:"No se recibieron datos", conductorID})
          }
  
          const conductorEncontrado = await conductorModel.findOne({_id: conductorID}).populate("ruta")
          return res.status(200).json({msg:"Todo bien, encontre", conductorEncontrado})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const traerTodosCondutores= async (req:Request, res: Response): Promise<any>=>{
    try {
     
          const todosConductores = await conductorModel.find().populate("ruta")
          return res.status(200).json({msg:"Todo bien, encontre", todosConductores})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const borrarConductor = async (req:Request, res: Response): Promise<any>=>{
    try {
        const {conductorID} = req.body
        console.log(conductorID)


        if(!conductorID){
            return res.status(400).json({msg:"No se recibieron datos", conductorID})
        }

        const conductorEliminado = await conductorModel.deleteOne({_id:conductorID})
        console.log("Se supoe elimine la del id", conductorID)
        return res.status(200).json({msg:"Todo bien, ya la elimine"})


    } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
    }
}


export const puntos= async (req:Request, res: Response): Promise<any>=>{
    try {
        
        const  { conductorID, puntos} = req.body
        console.log("Hola soy el id del coductor", conductorID)
       
        
          if(!conductorID||!puntos){
              return res.status(400).json({msg:"No se recibieron datos para marcarla completada", conductorID})
          }
  
          const conductorActualizado = await conductorModel.findOneAndUpdate(
            {_id:conductorID},
             {puntos:puntos}, 
             { new: true } )
          return res.status(200).json({msg:"Todo bien, actualice", conductorActualizado})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}


export const editarConductor= async (req:Request, res: Response): Promise<any>=>{
    try {
        
        const {name,
            ap,
            am,
            email,
            password, 
            conductorID}=req.body;
 
        console.log("Hola soy el id del coductor", conductorID)
       
        
        if(!name||
            !ap||
            !am||
            !email||
            !password||
            !conductorID){
            return res.status(400).json({
                msg:" faltan datos para editar al conductor"
            })                     //devolvemos un json
        }

        const filter={
            _id: conductorID
        }

        const update={
            name:name,
            ap:ap,
            am:am,
            email:email,
            password:password,
        }
  
          const conductorActualizado = await conductorModel.findOneAndUpdate(
            filter,
             update, 
             { new: true } )
          return res.status(200).json({msg:"Todo bien, actualice", conductorActualizado})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}

export const cambiarRuta= async (req:Request, res: Response): Promise<any>=>{
    try {
        
        const  { conductorID, ruta} = req.body
        console.log("Hola soy el id del coductor", conductorID)
       
        
          if(!conductorID||!ruta){
              return res.status(400).json({msg:"No se recibieron datos para marcarla completada", conductorID})
          }
  
          const conductorActualizado = await conductorModel.findOneAndUpdate(
            {_id:conductorID},
             {ruta:ruta}, 
             { new: true } )
          return res.status(200).json({msg:"Todo bien, actualice", conductorActualizado})
  
      } catch (error) {
        return res.status(500).json({msg:"Algo salio mal en el servidor"})
      }
}