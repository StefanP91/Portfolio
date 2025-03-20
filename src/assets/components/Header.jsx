import { Container, Nav, Navbar, NavbarToggle } from "react-bootstrap"
import '../../index.css'
const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#">Portfolio</Navbar.Brand>

                    <NavbarToggle aria-controls="navbarNav" className="custom-toggler"/>

                    <Navbar.Collapse id="navbarNav" className="justify-content-end"> 
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutMe">About Me</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contactMe" className="contactMe">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header