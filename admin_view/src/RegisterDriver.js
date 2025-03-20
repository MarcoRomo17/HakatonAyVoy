import './App.css';
import { Card, Container, Form, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { TbUsersPlus } from "react-icons/tb";
import AYVOYlogo from './images/AYVOYlogo.png'; 


export const Register = ()=>{
  return (
    <>
    <Container fluid className='vh-100' style={{backgroundColor:'#252569'}}>
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
