import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import styles from "./NavBar.module.css"

export default function NavBar(){
    return (
<nav>
  <Navbar  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link className={styles.link} to="/home">Julio Colon</Link></Navbar.Brand>
    <Nav className={styles.link}>
      <Nav.Link  href="#card">Projects</Nav.Link>
      <Nav.Link href="#footer">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</nav>
    )
}