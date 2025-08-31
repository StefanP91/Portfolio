import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import { Link } from 'react-router';

import style from "./Footer.module.css"

const Footer = () => {

    return (
        <footer>
            <div className={style.footer}>
                <Container>
                    <Row className='g-3'>
                        <Col md={4}>
                            <h3 className={style.footerName}>Stefan Panov</h3>
                            <span className={style.footerPosition}>Full-Stack Developer</span>
                        </Col>
                        <Col md={4}>
                            <h3 className='text-center'>Navigation</h3>
                            <div className='hstack gap-3 justify-content-center flex-wrap'>
                                <Link to="/" className={style.footerNavigation}>Home</Link>
                                <Link to="/about" className={style.footerNavigation}>About Me</Link>
                                <Link to="/projects" className={style.footerNavigation}>Projects</Link>
                                <Link to="/education" className={style.footerNavigation}>Education</Link>
                                <Link to="/experience" className={style.footerNavigation}>Experience</Link>
                                <Link to="/contact" className={style.footerContactMe}>Contact Me</Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h3 className='text-center'>Contact links</h3>
                            <div className='hstack gap-3 justify-content-center'>
                                <a href="https://github.com/stefanp91"><FaGithub className={`fs-2 ${style.footerLinks}`}/></a>
                                <a href="https://www.linkedin.com/in/stefan-panov-61a64b144/"><BsLinkedin  className={`fs-2 ${style.footerLinks}`}/></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            <div className={style.subFooter}>
                <span>© 2025 Stefan Panov. All rights reserved.</span>
            </div>
        </footer>
    
    )
}

export default Footer