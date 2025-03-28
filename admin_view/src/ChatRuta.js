import { Card, Container, Nav, Navbar} from "react-bootstrap";


export const ChatRuta = () => {
const mensajes = [
    {chofer:"Chofer R5(Manuel Gomez)",texto:"Hay trafico"},
    {chofer:"Chofer R5(Juan Hernandez)",texto:"Acabo de chocar"},
    {chofer:"Chofer R5(Jose Murillo)",texto:"Me quede sin gasolina"},
    {chofer:"Chofer R5(Victor Mayorga)",texto:"Se me poncho la llanta"},
    {chofer:"Chofer R5(Luis Ochoa)",texto:"Yo voy bien"}
]
  return (
    <Container fluid style={{ backgroundColor: "#252569", minHeight: "100vh", padding: "20px" }}>
      
      {/* Navbar Mejorado */}
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

      {/* Aqui va a ir el nombre del admin */}
      <Card className="mb-4 shadow-lg p-3 text-white text-center" style={{ backgroundColor: "#ca2193", borderRadius: "10px" }}>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Bienvenido, <span style={{ color: "#ffc107" }}>Admin</span>
        </Card.Text>
      </Card>



      <Container fluid className="p-4 rounded shadow-lg" style={{ backgroundColor: "#1a1a40" }}>
        <h3 className="text-center text-white mb-4">Chat de la ruta: 5{/*Aqui va a ir el numero de la ruta*/}</h3>

        <Container className="text-white" style={{ backgroundColor: "#0b1d5f", alignContent:"center" }}>
            <Container style={{margin:"5px", display:"flex", flexDirection:"column", backgroundColor:"white", width:"100%", height:"100%"}}>
        {mensajes.map((mensajes) => (

            
              <Card className="mb-2 mt-2" style={{borderRadius:"5px", width:"100%", height:"50px", display:"flex", flexDirection:"row", backgroundColor: "#1a1a40"}}>
                <Card.Text className="me-3" style={{color:"#d4e300 ", margin:"5px"}}>{mensajes.chofer}{/*Aqui va a ir el nombre del conductor*/}</Card.Text>
                <Card.Text style={{color:"white", margin:"5px"}}>{mensajes.texto}</Card.Text>
              </Card>
          
            ))}
            </Container>
        </Container>
      </Container>
    
    </Container>
  );
};