import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Nav, Card, Navbar, Button, Table, Form, Modal } from "react-bootstrap";

export const Recompensa = () => {
  useEffect(()=>{
    obtenerRecompensas()
  },[])
  const [Recompensas, setRecompensas] = useState([]);
  const [FORMM, setFORMM] = useState({});
  const [ShowModal, setShowModal] = useState(false);
  const [RecompensaUpdate, setRecompensaUpdate] = useState({});
  const [VarAEditar, setVarAEditar] = useState({});



  const obtenerRecompensas= async()=>{
    try {
      const condu =await axios.get("http://localhost:4010/recompensas/getAll")
      const recompensas= condu.data.todasLasRecompensas
      setRecompensas(recompensas)
      console.log("Hola, soy recompensas",recompensas)
    } catch (error) {
      console.log("Ocurrio un error:", error)
    }
  }
  const setValue=(field, value)=>{

    setFORMM({
        ...FORMM,
        [field]:value
    })
    console.log("estoy escribiendo en ", field, "el valor de ", value)

  
  }

  const registrarRecompensa=async()=>{
    try {
      const datosAmandar ={
        concepto:FORMM.concepto,
        puntos: parseInt(FORMM.puntos)
      }
      console.log("Mandare ", datosAmandar)
      const recompensa = await axios.post("http://localhost:4010/recompensas/create", datosAmandar)
      alert("Recompensa registrada")
    } catch (error) {
      console.log("Hubo un error: ", error)
    }
  }
  const handleClose=()=> setShowModal(false)
  const handleShow=(recompensaToUpdate)=>{
        
    setShowModal(true)
    console.log("recibo ",recompensaToUpdate)
    setRecompensaUpdate(recompensaToUpdate)
  }
  const setValue2=(field, value)=>{
    
    setVarAEditar({
        ...VarAEditar,
        [field]:value
    })
    console.log("Estoy escribiendo ",value," en el campo ", field)
  
  }

  const darDeBajaRecompensa= async(ID)=>{
    console.log('Jola, recibo:', ID)
 
    try {
    const conductorEliminado= await axios.delete("http://localhost:4010/recompensas/delete",{data:{recompensaID:ID}})
    //Por alguna razon, los delete solo mandan bien la informacion si es como la tengo en la linea de arriba
     alert("Recompensa eliminada con exito")
    } catch (error) {
     console.log("hubo un error", error)
    }
 }
 const actualizarRecompensa=async(objAnterior)=>{
  try {
    console.log("Hola, soy objAterior",objAnterior)
    console.log("Hola, soy VarAEditar",VarAEditar)

    const objetoActualizadp={
      recompensaID:objAnterior._id,
      concepto: VarAEditar.concepto,
      puntos: VarAEditar.puntos
    }

    console.log("Por lo tanto envio ", objetoActualizadp)

    const recompensaActualizada = await axios.put("http://localhost:4010/recompensas/update", objetoActualizadp)
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
          <Nav.Link href="/Admin" style={{ color: "#252569", fontWeight: "bold" }}>Choferes</Nav.Link>
          <Nav.Link href="/Rutas" style={{ color: "#ca2193", fontWeight: "bold" }}>Rutas</Nav.Link>
          <Nav.Link href="/Autorizacion" style={{ color: "#252569", fontWeight: "bold" }}>Autorizacion de canjeos</Nav.Link>
          <Nav.Link href="/Historial" style={{ color: "#252569", fontWeight: "bold" }}>Historial de canjeos</Nav.Link>
          <Nav.Link href="/Registrar" style={{ color: "#252569", fontWeight: "bold" }}>Crear cuenta de chofer</Nav.Link>
          <Nav.Link href="/Recompensa" style={{ color: "#252569", fontWeight: "bold" }}>Registrar recompensa</Nav.Link>
          <Nav.Link href="/AdminPuntos" style={{ color: "#252569", fontWeight: "bold" }}>Transferir</Nav.Link>

        </Nav>
      </Navbar>

      <Card className="mb-4 shadow-lg p-3 text-white text-center" style={{ backgroundColor: "#ca2193", borderRadius: "10px" }}>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Bienvenido, <span style={{ color: "#ffc107" }}>Admin</span>
        </Card.Text>
      </Card>

      
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center gap-4"
        style={{ backgroundColor: "#252569", padding: "20px", borderRadius: "10px" }}
      >
        
      <Container style={{display: "flex"}}>
      <Container className="me-4" style={{width:"50%", border:"5px solid #ca2193 ", backgroundColor:"#252569 "}}>
        <Card.Title className="mt-3 mb-3" style={{color:"white"}}>Recompensas vigentes</Card.Title>
      <Table striped bordered hover responsive className="text-white" style={{ backgroundColor: "#0b1d5f" }}>

          <thead>
            
            <tr className="text-center" style={{ backgroundColor: "#ca2193", color: "#fff" }}>
              
              <th>Concepto</th>
              <th>Puntos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Recompensas.map((prize) => (
              <tr key={prize.id} className="text-center">
                <td>{prize.concepto}</td>
                <td>{prize.puntos}</td>
                <td><Button variant="warning" className="me-3" onClick={()=>handleShow(prize)}>Actualizar ruta</Button>
                <Button variant="danger" onClick={()=>darDeBajaRecompensa(prize._id)} >Dar de baja</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
        
      <Container style={{width:"50%", border:"5px solid #ca2193 ", backgroundColor:"#252569 "}}>    
        <Card.Title className="mb-3 mt-3" style={{color:"white"}}>Crear nueva recompensa</Card.Title>
        <Form>
          <Form.Control className="mb-3" onChange={(e)=>setValue('concepto', e.target.value)}
  placeholder="Concepto"/>
          <Form.Control className="mb-3" type="number"onChange={(e)=>setValue('puntos', e.target.value)}
 placeholder="Puntos"/>
        </Form>
        <Button className="mb-3" style={{backgroundColor:"#ca2193 "}} onClick={()=>registrarRecompensa()}>Registrar recompensa</Button>
      </Container>


      </Container>
        {/*Aqui hice solo un mapeo con 4 numero pero con este vamos a usar los registros*/}
        
      </Container>
      <Modal show={ShowModal} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header>
                            <Modal.Title>Edita la recompensa...</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form>
                                  <Form.Control className="mb-3"  placeholder={RecompensaUpdate.concepto} onChange={(e)=>setValue2('concepto', e.target.value)}
                                  />
                                  <Form.Control className="mb-3" placeholder={RecompensaUpdate.puntos} type="number"onChange={(e)=>setValue2('puntos', e.target.value)}
                                  />
                                  </Form>
                            </Form>

                        </Modal.Body>

                        <Modal.Footer>
                        <Button onClick={()=>handleClose()}>Cerrar</Button>
                        <Button onClick={()=>actualizarRecompensa(RecompensaUpdate)}>Actualizar</Button>

                        </Modal.Footer>
      </Modal>
    </Container>
  );
};