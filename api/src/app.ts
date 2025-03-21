import  { Application, Response, Request } from "express";
import cors from "cors";
import express from "express"
import { borrarRuta, registrarRuta, traerRuta, traerTodasRutas } from "./controllers/rutaController";
import { borrarConductor, puntos, registrarConductor, traerTodosCondutores, traerUnConductor } from "./controllers/conductorController";
import { mostarMensajesPorRuta, registrarMensaje } from "./controllers/mensajeController";



const app:Application = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (_req: Request,res: Response)=>{
    res.send("Hola desde mi servidor con TS")

})
//ENPOINTS


//RUTAS
app.post("/ruta/create", registrarRuta)
app.get("/ruta/getOne", traerRuta )
app.get("/ruta/getAll", traerTodasRutas)
app.delete("/ruta/delete", borrarRuta )

//CONDUCTORES
app.post("/conductor/create", registrarConductor)
app.get("/conductor/getOne", traerUnConductor)
app.get("/conductor/getAll", traerTodosCondutores)
app.delete("/conductor/delete", borrarConductor)

app.put("/conductor/puntos", puntos)


//MENSAJES
app.post("/msg/create",registrarMensaje)
app.get("/msg/getMsg",mostarMensajesPorRuta)



export default app;