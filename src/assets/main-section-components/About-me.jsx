import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"

import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaPhp, FaLaravel } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiXdadevelopers, SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

import AOS from 'aos';

import 'aos/dist/aos.css';
import '../../index.css'


const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 1000, 
            once: false, 
        });
    },[])

    return (
        <>
            <div className="about-me-section" id="aboutMe">
                <Container>
                    <h1 className="about-me-header">About Me</h1>
                    <p className="about-me-intro">
                        I'm <span className="hero-name"></span>
                    </p>
                    <p className="about-me-description">
                        A detail-oriented full-stack developer who transforms ideas into reality through 
                        clean code, intuitive UX/UI design, and SEO-optimized implementations. 
                        I specialize in building responsive web applications that deliver 
                        exceptional user experiences across all devices.                    
                    </p>

                    <h1 className="about-me-subheader">Skills</h1>
                    <div>
                        {/* First Row*/}
                        <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500">
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaHtml5 /> HTML5</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaCss3 /> CSS3</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><RiJavascriptFill /> JavaScript</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaReact /> React</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Second Row*/}
                        <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaBootstrap /> Bootstrap</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaGitAlt /> Git</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaGithub /> GitHub</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FaPhp /> PHP</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                         {/* Third Row*/}
                         <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                         <Card.Title><BsFiletypeSql /> SQL</Card.Title>                            
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><SiMysql /> MySQL</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                         <Card.Title><SiXdadevelopers /> Web Development</Card.Title>                            
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="card-learning">
                                    <Card.Body>
                                        <Card.Title><FaLaravel /> Laravel</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                    
                    <h1 className="about-me-subheader mt-5">Education</h1>
                    <div>
                    <Row className="g-4" data-aos="fade-up" data-aos-duration="1500">
                        <Col md={6}>
                            <h2 className="text-white">Front-end Development</h2>
                            <Card>
                                <Card.Body>
                                    <img src="images/front-end-certificate.jpg" alt="front-end-certificate" className="img-fluid" />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <h2 className="text-white">Back-end Development</h2>
                            <Card>
                                <Card.Body>
                                    <img src="images/back-end certificate.jpg" alt="back-end-certificate" className="img-fluid" />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <h2 className="text-white">EU Diploma Supplement</h2>
                            <Card>
                                <Card.Body>
                                    <img src="images/eu-supplement.jpg" alt="eu-supplement" className="img-fluid" />
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                    </div>

                    <h1 className="about-me-subheader mt-5">Experience</h1>
                    <div>
                    <Row className="g-3" data-aos="fade-right" data-aos-duration="1500">
                        <Col md={6} xs={12}>
                            <Card className="card-experience">
                                <Card.Body>                
                                    <h4>Front-end Developer (Intern)</h4> 

                                    <p className="text-start">
                                        <strong>Creative Hub 08.2024 - 11.2024</strong>
                                    </p>

                                    <p className="text-start hidden-text">
                                        <strong>Responsibilities:</strong> <br />
                                        <ul className="custom-bullets">
                                            <li>Developing responsive, SEO-optimized web interfaces that enhance user experience</li>
                                            <li>Maintaining and improving three client-facing websites</li>
                                            <li>Collaborating with cross-functional teams including Marketers and Designers</li>
                                            <li>Implementing modern frontend technologies to create engaging web experiences</li>
                                        </ul>
                                    </p>                                    
                                </Card.Body>
                            </Card>
                        </Col>  
                        <Col md={6}>
                            <Card className="card-experience">
                                <Card.Body>
                                    <h4>Full-Stack Developer</h4> 
                                    
                                    <p className="text-start">
                                        <strong>Creative Hub 12.2024 - Present</strong>
                                    </p>

                                    <p className="text-start hidden-text">
                                        <strong>Responsibilities:</strong> <br />
                                        <ul className="custom-bullets">
                                            <li>Frontend work with React, HTML, CSS, Bootstrap, and JavaScript</li>
                                            <li>Backend work with PHP</li>
                                            <li>API development (both RESTful and GraphQL)</li>
                                            <li>Database integration with MySQL</li>
                                            <li>Version control management with Git and GitHub</li>
                                            <li>Collaboration with designers and marketers to create user-friendly interfaces</li>
                                            <li>SEO optimization for web applications</li>
                                        </ul>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>                     
                    </Row>
                    </div>
                
                </Container>
            </div>
        </>
    )         
}

export default AboutMe