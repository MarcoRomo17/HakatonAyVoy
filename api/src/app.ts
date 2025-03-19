import  { Application, Response, Request } from "express";
import cors from "cors";
import express from "express"
import { borrarRuta, registrarRuta, traerRuta, traerTodasRutas } from "./controllers/rutaController";



const app:Application = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (_req: Request,res: Response)=>{
    res.send("Hola desde mi servidor con TS")

})

app.post("/ruta/create", registrarRuta)
app.get("/ruta/getOne", traerRuta )
app.get("/ruta/getAll", traerTodasRutas)
app.delete("/ruta/delete", borrarRuta )


export default app;