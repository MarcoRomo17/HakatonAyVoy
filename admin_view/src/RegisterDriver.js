import './App.css';
import { Card, Container, Form, Button, Nav, Navbar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { TbUsersPlus } from "react-icons/tb";
import AYVOYlogo from './images/AYVOYlogo.png'; 
import { useEffect, useState } from 'react';
import axios from "axios"

export const Register = ()=>{
  useEffect(()=>{
    obtenerRutas()
    
},[])
  
 
  const [FORMM, setFORMM] = useState({});
  const [ERRORES, setERRORES] = useState({});
  const [Rutas, setRutas] = useState([]);

  const obtenerRutas= async ()=>{
    try {
      const rutasObtenidas1 = await axios.get("http://localhost:4010/ruta/getAll")
      setRutas(rutasObtenidas1.data.TodasLasRutas)
      console.log(rutasObtenidas1.data.TodasLasRutas)
    } catch (error) {
      console.log("Ocurrio un error:", error)
    }

  }

  const submit = async ()=>{
      try {
        console.log("Soy lo que se va a enviar",FORMM)
        const conductorRegistrado= await axios.post("http://localhost:4010/conductor/create", FORMM)
        alert("Conductor registrado con exito")
      } catch (error) {
        console.log("Ocurrio un error:", error)
        
      }
  }

  //Funcion que va a setear los valores del objeto FORMM, se trae todo lo del FORMM y si no existe el campo que se manda, lo crea y setea.
//Si sí existe, pues solo lo setea
const setValue=(field, value)=>{

  setFORMM({
      ...FORMM,
      [field]:value
  })
  console.log("estoy escribiendo en ", field, "el valor de ", value)

  if(!!ERRORES[field]) {//el !! antes del name de la variable convierte la variable en booleano y en su contraparte, depende, puede ser true o false
      setERRORES({
          ...ERRORES,
          [field]: null

      })

  }

}

//Esta funcion se encarga de hacer las validaciones. Aqui se van asignando los mensajes de error, los cuales se van a ir agregando al objeto newErrors, el cual al final 
//retornamos
const validar=()=>{
  const {name, ap, am, email, password}= FORMM
  const newErrors ={}


  if(!name || name ===''){
      newErrors.name= "Ingresa tu nombre o nombres"
  }

  if(!ap || ap ===''){
      newErrors.ap= "Ingresa tu apellido paterno"
  }

  if(!am || am ===''){
      newErrors.am= "Ingresa tu apellido paterno"
  }

  if(!email || email=== ''){
      newErrors.email= 'Ingresa tu email por favor'
  } else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email= 'Ingresa correctamente tu email. Recuerda que debe de llevar name@algo.com'

  }

  if(!password || password=== ''){
      newErrors.password= 'Ingresa algo por favor'

  }


  return newErrors
}

  return (
    <Container fluid style={{ backgroundColor: "#252569", minHeight: "100vh", padding: "20px" }}>
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
          <Nav.Link href="/Recompensa" style={{ color: "#252569", fontWeight: "bold" }}>Registrar recompensa</Nav.Link>
          <Nav.Link href="/AdminPuntos" style={{ color: "#252569", fontWeight: "bold" }}>Transferir</Nav.Link>

        </Nav>
      </Navbar>

      <Card className="mb-4 shadow-lg p-3 text-white" style={{ backgroundColor: "#ca2193 ", borderRadius: "10px" }}>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Bienvenido, <span style={{ color: "#ffc107" }}>{/*Aqui va a ir el name del admin*/}</span>
        </Card.Text>
      </Card>
      <center>
      <Card style={{ width: '30rem', height:'35rem', margin:'0', borderRadius:"15px" }}>
        <Card.Body style={{ backgroundColor: "#252569", borderRadius:'15px', padding:"15px", border:"5px solid #ca2193"}} >
        <Image src={AYVOYlogo} style={{width:"8rem", height:'8rem' }}/>
          <Card.Text style={{color:'#0dc8e2'}}>
          <TbUsersPlus/>
            CREAR NUEVA CUENTA DE CHOFER
          <TbUsersPlus/>
          </Card.Text>


          <Form>
            <Form.Group>
                  <Form.Control
                  placeholder="Nombre/s"
                  type="text"
                  className='mb-3'
                  onChange={(e)=>setValue('name', e.target.value)}
                  isInvalid={!!ERRORES.name}
                  />
                <Form.Control.Feedback type="invalid">
                {ERRORES.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Control
                placeholder="Apellido paterno"
                type="text"
                className='mb-3'
                onChange={(e)=>setValue('ap', e.target.value)}
                isInvalid={!!ERRORES.ap}
                />

                <Form.Control.Feedback type="invalid">
                            {ERRORES.ap}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <Form.Control
                placeholder="Apellido materno"
                type="text"
                className='mb-3'
                onChange={(e)=>setValue('am', e.target.value)}
                isInvalid={!!ERRORES.am}
                />

                <Form.Control.Feedback type="invalid">
                            {ERRORES.am}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <Form.Control
                placeholder="Correo electrónico"
                type="text"
                className='mb-3'
                onChange={(e)=>setValue('email', e.target.value)}
                isInvalid={!!ERRORES.email}
                />

                <Form.Control.Feedback type="invalid">
                            {ERRORES.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <Form.Control
                placeholder="Contraseña"
                type="password"
                className='mb-3'
                onChange={(e)=>setValue('password', e.target.value)}
                isInvalid={!!ERRORES.password}
                />

                <Form.Control.Feedback type="invalid">
                            {ERRORES.password}
                </Form.Control.Feedback>
            </Form.Group>

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



            <Button className='mt-3' style={{backgroundColor:'#784fba '}} onClick={()=>submit()}>Crear Cuenta</Button>
          </Form>

        </Card.Body>
      </Card>
      </center>
    </Container>
 
  );
}
