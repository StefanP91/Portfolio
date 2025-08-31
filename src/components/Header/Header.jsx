import { useState } from "react"
import { Container, Nav, Navbar, NavbarToggle } from "react-bootstrap"
import { Link } from "react-router"

import style from "./Header.module.css"
const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <header className={style.header}>
            <Navbar expand="lg" className="navbar" expanded={expanded}>
                <Container>
                    <Navbar.Brand href="#" className={style.navbarBrand}>Portfolio</Navbar.Brand>

                    <NavbarToggle
                        aria-controls="navbarNav"
                        className={style.customToggler}
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                    />

                    <Navbar.Collapse id="navbarNav" className="justify-content-end"> 
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className={style.navLink} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link as={Link} className={style.navLink} to="/about" onClick={() => setExpanded(false)}>About Me</Nav.Link>
                            <Nav.Link as={Link} className={style.navLink} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
                            <Nav.Link as={Link} className={style.navLink} to="/education" onClick={() => setExpanded(false)}>Education</Nav.Link>
                            <Nav.Link as={Link} className={style.navLink} to="/experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
                            <Nav.Link as={Link} className={`${style.navLink} ${style.contactMe}`} to="/contact" onClick={() => setExpanded(false)}>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header