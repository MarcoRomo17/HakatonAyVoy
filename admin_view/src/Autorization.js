import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Nav, Table, Navbar, Button } from "react-bootstrap";


export const Autorization = () => {
  const choferes = [
    { id: 1, nombre: "Juan", apellido: "Pérez", recompensa: "Dia libre", fecha:"17/02/25" },
    { id: 2, nombre: "Ana", apellido: "Gómez", recompensa: "Electrodomestico", fecha:"14/01/25" },
    { id: 3, nombre: "Carlos", apellido: "López", recompensa: "Dia libre", fecha:"21/04/25"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" },
  ];
//De momento solo hice un arreglo pero vamos a usar los datos de la bd
const [Solicitudes, setSolicitudes] = useState([]);
useEffect(()=>{
  obtenerSolicitudes()
  
},[])

const obtenerSolicitudes= async()=>{
  try {
    const solicitudesObtenidas= await axios.get("http://localhost:4010/solicitud/getAll")
    console.log(solicitudesObtenidas.data.todasLasSolicitudes)
    setSolicitudes(solicitudesObtenidas.data.todasLasSolicitudes)
  } catch (error) {
    console.log("Ocurrio un error: ", error)
  }
}

const aceptarSolicitud= async(datos)=>{
  console.log("Recibo: ", datos)
  datos.estado=true
  console.log("Y despues de procesar es: ",datos)

  const datosAHistorial={
    conductor:datos.conductor._id,
    recompensa:datos.recompensa._id,
    estado:datos.estado,
    fecha:datos.fecha
  }

  console.log("Hola, soy datos a mandar: ", datosAHistorial)

  const datosAPuntos={
    conductorID:datos.conductor._id,
     puntos:datos.conductor.puntos - datos.recompensa.puntos
  }

  console.log("Soy puntos datos a puntos", datosAPuntos)

try {
    //Crear historiar
 const crearHistorial= await axios.post("http://localhost:4010/historial/register", datosAHistorial)

 //BajarPuntos
const modificarPuntos= await axios.put("http://localhost:4010/conductor/puntos", datosAPuntos)
 //BorrarSolicitud
const solicitudEliminada= await axios.delete("http://localhost:4010/solicitud/delete",{data:{solicitudID:datos._id}})
alert("Canjeo correcto")
} catch (error) {
  console.log("Hubo un error: ", error)
}

}

const denegarSolicitud= async(datos)=>{
  console.log("Recibo: ", datos)
  datos.estado=false
  console.log("Y despues de procesar es: ",datos)

  const datosAHistorial={
    conductor:datos.conductor._id,
    recompensa:datos.recompensa._id,
   estado: datos.estado,
    fecha:datos.fecha
  }

  console.log("Hola, soy datos a HISTORIAL: ", datosAHistorial)

  try {
  //Crear historiar
  const crearHistorial= await axios.post("http://localhost:4010/historial/register", datosAHistorial)
   //BorrarSolicitud
  const solicitudEliminada= await axios.delete("http://localhost:4010/solicitud/delete",{data:{solicitudID:datos._id}})

  alert("Se ha eliminado con exito")
  } catch (error) {
    console.log("Hubo un error", error)
  }
}

  return (
    <Container fluid style={{ backgroundColor: "#252569", minHeight: "100vh", padding: "20px" }}>
      
      {/* Navbar Mejorado */}
      <Navbar expand="lg" className="mb-4 p-3 rounded shadow-lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "#252569" }}>
          Panel de Administración
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/Admin" style={{ color: "#252569", fontWeight: "bold" }}>Choferes</Nav.Link>
          <Nav.Link href="/Rutas" style={{ color: "#252569", fontWeight: "bold" }}>Rutas</Nav.Link>
          <Nav.Link href="/Autorizacion" style={{ color: "#ca2193", fontWeight: "bold" }}>Autorizacion de canjeos</Nav.Link>
          <Nav.Link href="/Historial" style={{ color: "#252569", fontWeight: "bold" }}>Historial de canjeos</Nav.Link>
          <Nav.Link href="/Registrar" style={{ color: "#252569", fontWeight: "bold" }}>Crear cuenta de chofer</Nav.Link>
          <Nav.Link href="/RegistrarRuta" style={{ color: "#252569", fontWeight: "bold" }}>Craer nueva ruta</Nav.Link>
          <Nav.Link href="/AdminPuntos" style={{ color: "#252569", fontWeight: "bold" }}>Transferir</Nav.Link>

        </Nav>
      </Navbar>

      {/* Aqui va a ir el nombre del admin */}
      <Card className="mb-4 shadow-lg p-3 text-white text-center" style={{ backgroundColor: "#ca2193", borderRadius: "10px" }}>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Bienvenido, <span style={{ color: "#ffc107" }}>Admin</span>
        </Card.Text>
      </Card>

      {/* Tabla de los choferes */}
      <Container fluid className="p-4 rounded shadow-lg" style={{ backgroundColor: "#1a1a40" }}>
        <h3 className="text-center text-white mb-4">Autorizacion de canjeos</h3>

        <Table striped bordered hover responsive className="text-white" style={{ backgroundColor: "#0b1d5f" }}>
          <thead>
            <tr className="text-center" style={{ backgroundColor: "#ca2193", color: "#fff" }}>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido/s</th>
              <th>Recompensa canjeada</th>
              <th>Estado de autorizacion</th>
            </tr>
          </thead>
          <tbody>
            {Solicitudes.map((chofer) => (
              <tr key={chofer._id} className="text-center">
                <td style={{ fontWeight: "bold", color: "#ffc107" }}>{chofer.id}</td>
                <td>{chofer.conductor.name}</td>
                <td>{chofer.conductor.ap} {chofer.conductor.am}</td>
                <td>{chofer.recompensa.concepto}</td>
                <td><Button variant="success" className="me-3" onClick={()=>aceptarSolicitud(chofer)}>Autorizar</Button>
                <Button variant="danger" onClick={()=>denegarSolicitud(chofer)}>Denegar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};