import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Nav, Table, Navbar, Button, Modal, Form } from "react-bootstrap";


export const Admin = () => {
 /* const choferes = [
    { id: 1, nombre: "Juan", apellido: "Pérez", puntos: 150, ruta:"43" },
    { id: 2, nombre: "Ana", apellido: "Gómez", puntos: 200 , ruta:"43"},
    { id: 3, nombre: "Carlos", apellido: "López", puntos: 175 , ruta:"43"},
    { id: 4, nombre: "Laura", apellido: "Martínez", puntos: 220 , ruta:"43"},
  ];*/
//De momento solo hice un arreglo pero vamos a usar los datos de la bd
const [Choferes, setChoferes] = useState([]);
const [RutaUpdateOBJ, setRutaUpdateOBJ] = useState({});
const [ShowModal, setShowModal] = useState(false);
const [VarAEditar, setVarAEditar] = useState({});
const [Rutas, setRutas] = useState([]);

useEffect(()=>{
  obtenerConductores()
  obtenerRutas()
},[])




const obtenerConductores= async()=>{
  try {
    const condu =await axios.get("http://localhost:4010/conductor/getAll")
    const conductores= condu.data.todosConductores
    setChoferes(conductores)
    console.log("Hola, soy conductores",conductores)
  } catch (error) {
    console.log("Ocurrio un error:", error)
    
  }
}

const obtenerRutas= async ()=>{
  try {
    const rutasObtenidas1 = await axios.get("http://localhost:4010/ruta/getAll")
    setRutas(rutasObtenidas1.data.TodasLasRutas)
    console.log(rutasObtenidas1.data.TodasLasRutas)
  } catch (error) {
    console.log("Ocurrio un error:", error)
  }

} 

const darDeBaja= async(ID)=>{
   console.log('Jola, recibo:', ID)

   try {
   const conductorEliminado= await axios.delete("http://localhost:4010/conductor/delete",{data:{conductorID:ID}})
   //Por alguna razon, los delete solo mandan bien la informacion si es como la tengo en la linea de arriba
    alert("Conductor eliminado con exito")
   } catch (error) {
    console.log("hubo un error", error)
   }
}

const handleClose=()=> setShowModal(false)

const handleShow=(rutaToUpdate)=>{
        
  setShowModal(true)
  console.log("recibo ",rutaToUpdate)
  setRutaUpdateOBJ(rutaToUpdate)
}

const setValue=(field, value)=>{
    
  setVarAEditar({
      ...VarAEditar,
      [field]:value
  })
  console.log("Estoy escribiendo ",value," en el campo ", field)

}

const actualizarRuta=async(objAnterior)=>{
  try {
    console.log("Hola, soy objAterior",objAnterior)
    console.log("Hola, soy VarAEditar",VarAEditar)

    const objetoActualizadp={
      conductorID:objAnterior._id,
      ruta: VarAEditar.ruta
    }

    console.log("Por lo tanto envio ", objetoActualizadp)

    const tareaYAactualizada = await axios.put("http://localhost:4010/conductor/ruta", objetoActualizadp)
    //console.log("Esta madre me regreso",tareaYAactualizada.data.TareaActualizada)
    setShowModal(false)
    alert("Actualizada correctamente")
  } catch (error) {
      console.log("Algo salio mal", error)
  }
}



  return (
    <Container fluid style={{ backgroundColor: "#252569", minHeight: "100vh", padding: "20px" }}>
      
      <Navbar expand="lg" className="mb-4 p-3 rounded shadow-lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "#252569" }}>
          Panel de Administración
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/Admin" style={{ color: "#ca2193", fontWeight: "bold" }}>Choferes</Nav.Link>
          <Nav.Link href="/Rutas" style={{ color: "#252569", fontWeight: "bold" }}>Rutas</Nav.Link>
          <Nav.Link href="/Autorizacion" style={{ color: "#252569", fontWeight: "bold" }}>Autorizacion de canjeos</Nav.Link>
          <Nav.Link href="/Historial" style={{ color: "#252569", fontWeight: "bold" }}>Historial de canjeos</Nav.Link>
          <Nav.Link href="/Registrar" style={{ color: "#252569", fontWeight: "bold" }}>Crear cuenta de chofer</Nav.Link>
          <Nav.Link href="/RegistrarRuta" style={{ color: "#252569", fontWeight: "bold" }}>Craer nueva ruta</Nav.Link>

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
        <h3 className="text-center text-white mb-4">Listado de Choferes</h3>

        <Table striped bordered hover responsive className="text-white" style={{ backgroundColor: "#0b1d5f" }}>
          <thead>
            <tr className="text-center" style={{ backgroundColor: "#ca2193", color: "#fff" }}>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido/s</th>
              <th>Puntos</th>
              <th>Ruta actual</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Choferes.map((chofer) => (
              <tr key={chofer.id} className="text-center">
                <td style={{ fontWeight: "bold", color: "#ffc107" }}>{chofer.id}</td>
                <td>{chofer.name}</td>
                <td>{chofer.ap}</td>
                <td>{chofer.puntos}</td>
                <td>{chofer.ruta.numeroRuta}</td>
                <td><Button variant="warning" className="me-3" onClick={()=>handleShow(chofer)}>Actualizar ruta</Button>
                <Button variant="danger"  onClick={()=>darDeBaja(chofer._id)}>Dar de baja</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={ShowModal} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header>
                            <Modal.Title>Edita tu tarea...</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Select name='RutaSelect' onChange={(e)=>setValue('ruta', e.target.value)}>
                                      <option>Selecciona la ruta</option>
                                      {
                                        Rutas.map((ruta)=>(
                                          <option value={ruta._id}>{ruta.numeroRuta}</option>
                                        ))
                                      }
                                    </Form.Select>

                                  </Form.Group>

                            </Form>

                        </Modal.Body>

                        <Modal.Footer>
                        <Button onClick={()=>handleClose()}>Cerrar</Button>
                        <Button onClick={()=>actualizarRuta(RutaUpdateOBJ)}>Actualizar</Button>

                        </Modal.Footer>
      </Modal>
    </Container>
  );
};