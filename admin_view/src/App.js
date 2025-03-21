import './App.css';
import { Card, Container, Form, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { IoBus } from "react-icons/io5";
import AYVOYlogo from './images/AYVOYlogo.png'; 


function App() {
  return (
    <>
    <Container fluid style={{backgroundColor:'#252569'}}>
      <center>
      <Card style={{ width: '30rem', height:'35rem', borderRadius:"15px"}}>
        <Card.Body style={{ backgroundColor: "#252569", borderRadius:'15px', padding:"50px", border:"5px solid #ca2193"}} >
        <Image src={AYVOYlogo} style={{width:"8rem", height:'8rem' }}/>
          <Card.Text style={{color:'#0dc8e2'}}>
          <IoBus/>
            ADMINISTRADOR
          <IoBus/>
          </Card.Text>


          <Form>
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

            <Button style={{backgroundColor:'#784fba '}} href='/Admin'>iniciar sesion</Button>
          </Form>

        </Card.Body>
      </Card>
      </center>
    </Container>
    </>
  );
}

export default App;