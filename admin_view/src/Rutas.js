import { Container, Nav, Card, Navbar, Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Rutas = () => {
  const [route, setRoute] = useState({});
  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);
  const [Rutas, setRutas] = useState([]);
  const [AllMSG, setAllMSG] = useState([]);
  const [MSGFiltrados, setMSGFiltrados] = useState([]);

  useEffect(() => {
   // getMessages();
    obtenerRutas()
    getAllMsg()

   /* const interval = setInterval(() => {
      getMessages();
    }, 2000);

    return () => clearInterval(interval);*/
  }, []);

  const obtenerRutas= async ()=>{
    try {
      const rutasObtenidas1 = await axios.get("http://localhost:4010/ruta/getAll")
      setRutas(rutasObtenidas1.data.TodasLasRutas)
      console.log(rutasObtenidas1.data.TodasLasRutas)
    } catch (error) {
      console.log("Ocurrio un error:", error)
    }
  
  } 

  const setValue=(field, value)=>{

    console.log("recibo de ruta: ", field, value)

    const mensajesFiltrados = AllMSG.filter((msg)=>msg.ruta === value)
    console.log("mensajes de la ruta : ", value)
    console.log(mensajesFiltrados)
    setMSGFiltrados(mensajesFiltrados)
  
  }

  /*const getMessages = async () => {
    try {
      const res = await axios.post('http://localhost:4010/msg/getMsg', {
        rutaID: "67dcdd81b802a5f306ffbf30",
      });
      setMessage(res.data.mensajesDeLaRuta);
    } catch (error) {
      console.log('Error al obtener mensajes:', error);
    }
  };*/
  const getAllMsg = async() =>{
    try {
      const res = await axios.get('http://localhost:4010/msg/getAll')
      console.log(res.data.mensajesDeLaRuta)
      setAllMSG(res.data.mensajesDeLaRuta)

    } catch (error) {
      console.log("Hubo un error: ", error  )
    }
  }

 
 /* const sendMessage = async () => {
    if (text) {
      const data = {
        conductor: "67e0ce1d521748a129425fb2",
        ruta: "67dcdd81b802a5f306ffbf30",
        texto: text,
        fecha: getDate(),
      };
      try {
        await axios.post('http://localhost:4010/msg/create', data);
        getMessages();
      } catch (error) {
        console.log('Error al enviar mensaje:', error);
      }
      setText('');
    }
  };*/

  const getDate = () => {
    const fecha = new Date();
    return fecha.toISOString().replace('T', ' ').substring(0, 19);
  };

  return (
    <Container fluid style={{ backgroundColor: "#252569", minHeight: "100vh", padding: "20px"}}>

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


      <Form.Select className="mb-3" aria-label="Default select example"onChange={(e)=>setValue('ruta', e.target.value)}>
      <option>Selecciona una ruta</option>
      {
                                        Rutas.map((ruta)=>(
                                          <option value={ruta._id}>{ruta.numeroRuta}</option>
                                        ))
                                      }
    </Form.Select>

    <Container style={{display:"flex"}}>


      {/*Este es el chat de las rutas*/}
    <Container className="text-white" style={{ backgroundColor: '#0b1d5f', alignContent: 'center', height: '300px', overflowY: 'auto', width:"50%"}}>
        <h3 className="text-center text-white mb-4">Chat de la ruta: {route.numeroRuta}</h3>
        <Container className="text-white" style={{ backgroundColor: '#0b1d5f', alignContent: 'center' }}>
          <Container style={{ margin: '5px', display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '100%', height: '100%' }}>
            
            {
              MSGFiltrados.map((msg)=>(
                  <Card style={{width:"fit-content", height:"fit-content", fontSize:"10px"}} className="m-1">
                    <Card.Body>
                      <Card.Title style={{fontSize:"15px"}}>{msg.texto}</Card.Title>
                      <Card.Text>{msg.conductor.name} {msg.fecha}</Card.Text>
                    </Card.Body>
                  </Card>)

              )
            }



          </Container>
        </Container>

        <Container className="mt-3 d-flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribir Mensaje"
          className="form-control me-2"
        />
        <button  className="btn btn-warning">Enviar</button>
      </Container>
      </Container>


      {/*Aqui va a ir el mapa de la ruta*/}
      <Container className="p-4 rounded shadow-lg" style={{ backgroundColor: '#1a1a40', width:"50%"}}>
        <Card style={{width:"100%", height:"100%"}}> 
        </Card>
      </Container>


      </Container>
      
      
      </Container>
  );
};