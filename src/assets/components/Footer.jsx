import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h3 className='footer-name'>Stefan Panov</h3>
                            <span className='footer-position'>Front-end Developer</span>
                        </Col>
                        <Col md={4}>
                            <h3 className='text-center'>Navigation</h3>
                            <div className='hstack gap-3 justify-content-center'>
                                <a href="#">Home</a>
                                <a href="#aboutMe">About Me</a>
                                <a href="#projects">Projects</a>
                                <a href="#contactMe" className="contactMe">Contact Me</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h3 className='text-center'>Contact links</h3>
                            <div className='hstack gap-3 justify-content-center'>
                                <a href="https://github.com/stefanp91"><FaGithub className='fs-2 links'/></a>
                                <a href="https://www.linkedin.com/in/stefan-panov-61a64b144/"><BsLinkedin  className='fs-2 links'/></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            <div className="sub-footer">
                <span>© 2024 Stefan Panov. All rights reserved.</span>
            </div>
        </footer>
    
    )
}

export default Footer