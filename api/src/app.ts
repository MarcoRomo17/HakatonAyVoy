import  { Application, Response, Request } from "express";
import cors from "cors";
import express from "express"
import { borrarRuta, registrarRuta, traerRuta, traerTodasRutas } from "./controllers/rutaController";
import { borrarConductor, cambiarRuta, editarConductor, puntos, registrarConductor, signin, traerTodosCondutores, traerUnConductor } from "./controllers/conductorController";
import { mostarMensajesPorRuta, registrarMensaje, todosLosMensajes } from "./controllers/mensajeController";
import { borrarSolicitud, registrarSolicitud, traertodasLasSolicitudes } from "./controllers/solicitudController";
import { borrarRecompensa, editarRecompensa, registrarRecompensa, traerRecompensasTodas, traerUnaRecompensa } from "./controllers/recompensaController";
import { registrarHistorial, traerTodoHistorial } from "./controllers/historialController";



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
app.post("/ruta/getOne", traerRuta )
app.get("/ruta/getAll", traerTodasRutas)
app.delete("/ruta/delete", borrarRuta )

//CONDUCTORES
app.post("/conductor/create", registrarConductor)
app.post("/conductor/signin", signin)
app.get("/conductor/getOne", traerUnConductor)
app.get("/conductor/getAll", traerTodosCondutores)
app.delete("/conductor/delete", borrarConductor)

app.put ("/conductor/puntos", puntos)
app.put("/conductor/update", editarConductor)
app.put("/conductor/ruta", cambiarRuta)

//MENSAJES
app.post("/msg/create",registrarMensaje)
app.get("/msg/getMsg",mostarMensajesPorRuta)
app.get("/msg/getAll", todosLosMensajes)

//SOLICITUDES
app.post("/solicitud/create", registrarSolicitud)
app.get("/solicitud/getAll", traertodasLasSolicitudes)
app.delete("/solicitud/delete", borrarSolicitud)

//HISTORIALES
app.post("/historial/register", registrarHistorial)
app.get("/historial/getAll", traerTodoHistorial)



//RECOMPENSAS
app.post("/recompensas/create", registrarRecompensa)
app.get("/recompensas/getOne", traerUnaRecompensa)
app.get("/recompensas/getAll", traerRecompensasTodas)
app.delete("/recompensas/delete", borrarRecompensa)
app.put("/recompensas/update",  editarRecompensa)


export default app;