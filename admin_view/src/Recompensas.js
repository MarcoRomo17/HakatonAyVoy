import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Nav, Card, Navbar, Button, Table, Form } from "react-bootstrap";

export const Recompensa = () => {
  useEffect(()=>{
    obtenerRecompensas()
  },[])
  const [Recompensas, setRecompensas] = useState([]);

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
          <Nav.Link href="/RegistrarRuta" style={{ color: "#252569", fontWeight: "bold" }}>Craer nueva ruta</Nav.Link>
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
            {Recompensas.map((chofer) => (
              <tr key={chofer.id} className="text-center">
                <td>{chofer.concepto}</td>
                <td>{chofer.puntos}</td>
                <td><Button variant="warning" className="me-3">Actualizar ruta</Button>
                <Button variant="danger" >Dar de baja</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
        
      <Container style={{width:"50%", border:"5px solid #ca2193 ", backgroundColor:"#252569 "}}>    
        <Card.Title className="mb-3 mt-3" style={{color:"white"}}>Crear nueva recompensa</Card.Title>
        <Form>
          <Form.Control className="mb-3" placeholder="Concepto"/>
          <Form.Control className="mb-3" placeholder="Puntos"/>
        </Form>
        <Button className="mb-3" style={{backgroundColor:"#ca2193 "}}>Registrar recompensa</Button>
      </Container>


      </Container>
        {/*Aqui hice solo un mapeo con 4 numero pero con este vamos a usar los registros*/}
        
      </Container>
    </Container>
  );
};