import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';

export const ChatRuta = () => {
  const [route, setRoute] = useState({});
  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);

  useEffect(() => {
    getMessages();

    const interval = setInterval(() => {
      getMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getMessages = async () => {
    try {
      const res = await axios.post('http://localhost:4010/msg/getMsg', {
        rutaID: "67dcdd81b802a5f306ffbf30",
      });
      setMessage(res.data.mensajesDeLaRuta);
    } catch (error) {
      console.log('Error al obtener mensajes:', error);
    }
  };

 
  const sendMessage = async () => {
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
  };

  const getDate = () => {
    const fecha = new Date();
    return fecha.toISOString().replace('T', ' ').substring(0, 19);
  };

  return (
    <Container fluid style={{ backgroundColor: '#252569', minHeight: '100vh', padding: '20px' }}>
      <Navbar expand="lg" className="mb-4 p-3 rounded shadow-lg" style={{ backgroundColor: '#fff' }}>
        <Navbar.Brand href="#" style={{ fontWeight: 'bold', color: '#252569' }}>
          Panel de Administración
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/Admin" style={{ color: '#252569', fontWeight: 'bold' }}>Choferes</Nav.Link>
          <Nav.Link href="/Rutas" style={{ color: '#ca2193', fontWeight: 'bold' }}>Rutas</Nav.Link>
          <Nav.Link href="/Autorizacion" style={{ color: '#252569', fontWeight: 'bold' }}>Autorizacion de canjeos</Nav.Link>
          <Nav.Link href="/Historial" style={{ color: '#252569', fontWeight: 'bold' }}>Historial de canjeos</Nav.Link>
          <Nav.Link href="/Registrar" style={{ color: '#252569', fontWeight: 'bold' }}>Crear cuenta de chofer</Nav.Link>
          <Nav.Link href="/RegistrarRuta" style={{ color: '#252569', fontWeight: 'bold' }}>Crear nueva ruta</Nav.Link>
          <Nav.Link href="/AdminPuntos" style={{ color: '#252569', fontWeight: 'bold' }}>Transferir</Nav.Link>
        </Nav>
      </Navbar>

      <Card className="mb-4 shadow-lg p-3 text-white text-center" style={{ backgroundColor: '#ca2193', borderRadius: '10px' }}>
        <Card.Text style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Bienvenido, <span style={{ color: '#ffc107' }}>Admin</span>
        </Card.Text>
      </Card>

      <Container fluid className="p-4 rounded shadow-lg" style={{ backgroundColor: '#1a1a40' }}>
        <h3 className="text-center text-white mb-4">Chat de la ruta: {route.numeroRuta}</h3>
        <Container className="text-white" style={{ backgroundColor: '#0b1d5f', alignContent: 'center' }}>
          <Container style={{ margin: '5px', display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '100%', height: '100%' }}>
            {message.map((m) => (
              <Card key={m._id} className="mb-2 mt-2" style={{ borderRadius: '10px', width: '50%', height: '50px', display: 'flex', flexDirection: 'row', backgroundColor: '#1a1a40' }}>
                <Card.Text className="me-3" style={{ color: '#d4e300', margin: '5px' }}>{m.conductor.name}</Card.Text>
                <Card.Text style={{ color: 'white', margin: '5px' }}>{m.texto}</Card.Text>
              </Card>
            ))}
          </Container>
        </Container>
      </Container>

      <Container className="mt-3 d-flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribir Mensaje"
          className="form-control me-2"
        />
        <button onClick={sendMessage} className="btn btn-warning">Enviar</button>
      </Container>
    </Container>
  );
};


