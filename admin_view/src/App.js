import './App.css';
import { Card, Container, Form, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { IoBus } from "react-icons/io5";
import AYVOYlogo from './images/AYVOYlogo.png'; 
import { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate=useNavigate()
  const [VarAEditar, setVarAEditar] = useState({});
  
  const setValue=(field, value)=>{
    
    setVarAEditar({
        ...VarAEditar,
        [field]:value
    })
    console.log("Estoy escribiendo ",value," en el campo ", field)
  
  }

  const login =async()=>{
    try {
      console.log("mandare ", VarAEditar)
      const userLogged= await axios.post("http://localhost:4010/conductor/signin", VarAEditar)
      console.log("data es  ", userLogged.data)
      const usuarioEncontrado= userLogged.data.user

      if(!usuarioEncontrado.esAdmin){
        alert("No se encontro el usuario")
      }else{
        navigate("/Admin")

      }

    } catch (error) {
      console.log("Hubo un error: ", error)
    }
  }

  return (
    <>
    <Container fluid style={{backgroundColor:'#252569'  }} >
      <center>
        <Container>
      <Card style={{ width: '30rem', height:'35rem', borderRadius:"15px", }} >
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
            onChange={(e)=>setValue('email', e.target.value)}
            />


            <Form.Control 
            placeholder='Contraseña'
            type='password'
            className='mb-3'
            onChange={(e)=>setValue('password', e.target.value)}
            />

            <Button style={{backgroundColor:'#784fba '}} onClick={()=>login()}>iniciar sesion</Button>
          </Form>

        </Card.Body>
      </Card>

        </Container>
      </center>
    </Container>
    </>
  );
}

export default App;