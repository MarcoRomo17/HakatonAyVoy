import { Container, Nav, Card, Navbar } from "react-bootstrap";

export const Rutas = () => {
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
        </Nav>
      </Navbar>

      <Card className="mb-4 shadow-lg p-3 text-white" style={{ backgroundColor: "#ca2193 ", borderRadius: "10px" }}>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Bienvenido, <span style={{ color: "#ffc107" }}>{/*Aqui va a ir el nombre del admin*/}</span>
        </Card.Text>
      </Card>

      
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center gap-4"
        style={{ backgroundColor: "#252569", padding: "20px", borderRadius: "10px" }}
      >
        {/*Aqui hice solo un mapeo con 4 numero pero con este vamos a usar los registros*/}
        {[1, 2, 3, 4].map((num) => ( 
          <Card key={num} className="shadow-lg" style={{ width: "20rem", height: "23rem", borderRadius: "15px" }}>
            <Card.Body
              className="d-flex flex-column align-items-center justify-content-center text-white"
              style={{ backgroundColor: "#0b1d5f", borderRadius: "15px", textAlign: "center" }}
            >
              <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Número de Ruta:</Card.Text>
              <Card.Text style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffc107" }}>{num}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
};