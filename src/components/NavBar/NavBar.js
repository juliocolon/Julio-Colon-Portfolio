import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function NavBar(){
    return (
<nav>
  <Navbar  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Julio Colon</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</nav>
    )
}