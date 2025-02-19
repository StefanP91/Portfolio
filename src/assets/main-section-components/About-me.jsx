import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaPhp } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiXdadevelopers } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';




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
                        A front-end developer with a passion for creating beautiful, functional, responsive and SEO Optimized web applications.
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
                                        <Card.Title><RiNextjsFill /> Next.js</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                         {/* Third Row*/}
                         <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                         <Card.Title><SiXdadevelopers /> Web Development</Card.Title>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> IT Project Management</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Account Management</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className="card-learning">
                                    <Card.Body>
                                        <Card.Title><FaPhp /> PHP</Card.Title>
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