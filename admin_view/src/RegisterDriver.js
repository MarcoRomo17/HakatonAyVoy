import './App.css';
import { Card, Container, Form, Button, Nav, Navbar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { TbUsersPlus } from "react-icons/tb";
import AYVOYlogo from './images/AYVOYlogo.png'; 


export const Register = ()=>{
  return (
    <>
    <Container fluid className='vh-100' style={{backgroundColor:'#252569'}}>
    <Navbar expand="lg" className="mb-4 p-3 rounded shadow-lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "#252569" }}>
          Panel de Administración
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/Admin" style={{ color: "#252569", fontWeight: "bold" }}>Choferes</Nav.Link>
          <Nav.Link href="/Rutas" style={{ color: "#252569", fontWeight: "bold" }}>Rutas</Nav.Link>
          <Nav.Link href="/Autorizacion" style={{ color: "#252569", fontWeight: "bold" }}>Autorizacion de canjeos</Nav.Link>
          <Nav.Link href="/Historial" style={{ color: "#252569", fontWeight: "bold" }}>Historial de canjeos</Nav.Link>
          <Nav.Link href="/Registrar" style={{ color: "#ca2193", fontWeight: "bold" }}>Crear cuenta de chofer</Nav.Link>
        </Nav>
      </Navbar>

      <Card className="mb-4 shadow-lg p-3 text-white" style={{ backgroundColor: "#ca2193 ", borderRadius: "10px" }}>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Bienvenido, <span style={{ color: "#ffc107" }}>{/*Aqui va a ir el nombre del admin*/}</span>
        </Card.Text>
      </Card>
      <center>
      <Card style={{ width: '30rem', height:'35rem', margin:'0'}}>
        <Card.Body style={{ backgroundColor: "#252569", borderRadius:'15px', padding:"15px"}} >
        <Image src={AYVOYlogo} style={{width:"8rem", height:'8rem' }}/>
          <Card.Text style={{color:'#0dc8e2'}}>
          <TbUsersPlus/>
            CREAR NUEVA CUENTA DE CHOFER
          <TbUsersPlus/>
          </Card.Text>


          <Form>
          <Form.Control
            placeholder="Nombre/s"
            type="text"
            className='mb-3'
            />

            <Form.Control
            placeholder="Apellido paterno"
            type="text"
            className='mb-3'
            />

            <Form.Control
            placeholder="Apellido materno"
            type="text"
            className='mb-3'
            />

            <Form.Control
            placeholder="Correo electrónico"
            type="email"
            className='mb-3'
            />


            <Form.Control 
            placeholder='Contraseña'
            type='password'
            className='mb-3'
            />

            <Form.Control 
            placeholder='Ruta designada'
            type='text'
            className='mb-3'
            />

            <Button style={{backgroundColor:'#784fba '}} href='/Admin'>Crear Cuenta</Button>
          </Form>

        </Card.Body>
      </Card>
      </center>
    </Container>
    </>
  );
}
