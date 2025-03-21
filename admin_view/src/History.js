import { Card, Container, Nav, Table, Navbar } from "react-bootstrap";


export const History = () => {
  const choferes = [
    { id: 1, nombre: "Juan", apellido: "Pérez", recompensa: "Dia libre", fecha:"17/02/25", estado:"Denegado" },
    { id: 2, nombre: "Ana", apellido: "Gómez", recompensa: "Electrodomestico", fecha:"14/01/25", estado:"Autorizado" },
    { id: 3, nombre: "Carlos", apellido: "López", recompensa: "Dia libre", fecha:"21/04/25", estado:"Autorizado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
    { id: 4, nombre: "Laura", apellido: "Martínez", recompensa: "Bono economico", fecha:"29/11/24" , estado:"Denegado"},
  ];
//De momento solo hice un arreglo pero vamos a usar los datos de la bd
  return (
    <Container fluid style={{ backgroundColor: "#252569", minHeight: "100vh", padding: "20px" }}>
      
      {/* Navbar Mejorado */}
      <Navbar expand="lg" className="mb-4 p-3 rounded shadow-lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "#252569" }}>
          Panel de Administración
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/Admin" style={{ color: "#252569", fontWeight: "bold" }}>Choferes</Nav.Link>
          <Nav.Link href="/Rutas" style={{ color: "#252569", fontWeight: "bold" }}>Rutas</Nav.Link>
          <Nav.Link href="/Autorizacion" style={{ color: "#252569", fontWeight: "bold" }}>Autorizacion de canjeos</Nav.Link>
          <Nav.Link href="/Historial" style={{ color: "#ca2193", fontWeight: "bold" }}>Historial de canjeos</Nav.Link>
          <Nav.Link href="/Registrar" style={{ color: "#252569", fontWeight: "bold" }}>Crear cuenta de chofer</Nav.Link>
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
        <h3 className="text-center text-white mb-4">Historial de canjeos</h3>

        <Table striped bordered hover responsive className="text-white" style={{ backgroundColor: "#0b1d5f" }}>
          <thead>
            <tr className="text-center" style={{ backgroundColor: "#ca2193", color: "#fff" }}>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Recompensa canjeada</th>
              <th>Fecha de canjeo</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            {choferes.map((chofer) => (
              <tr key={chofer.id} className="text-center">
                <td style={{ fontWeight: "bold", color: "#ffc107" }}>{chofer.id}</td>
                <td>{chofer.nombre}</td>
                <td>{chofer.apellido}</td>
                <td>{chofer.recompensa}</td>
                <td>{chofer.fecha}</td>
                <td>{chofer.estado}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};