import { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { motion } from "framer-motion";

import AOS from 'aos';

import 'aos/dist/aos.css';

import style from "../shared/styles/Pages.module.css"

const Experience = () => {
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 1000, 
            once: false, 
        });
    },[])
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} 
        >
            <div className={style.page}>
                <Container>
                    <h1 className={style.title}>Experience</h1>

                    <div>
                        <Row className="g-3" data-aos="fade-right" data-aos-duration="1500">
                            <Col md={6} xs={12}>
                                <Card className={style.cardExperience}>
                                    <Card.Body>                
                                        <h4>Front-end Developer (Intern)</h4> 

                                        <p className="text-start">
                                            <strong>Creative Hub 08.2024 - 11.2024</strong>
                                        </p>

                                        <p className={`text-start ${style.hiddenText}`}>
                                            <strong>Responsibilities:</strong> <br />
                                            <ul className={style.customBullets}>
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
                                <Card className={style.cardExperience}>
                                    <Card.Body>
                                        <h4>Full-Stack Developer</h4> 
                                        
                                        <p className="text-start">
                                            <strong>Creative Hub 12.2024 - Present</strong>
                                        </p>

                                        <p className={`text-start ${style.hiddenText}`}>
                                            <strong>Responsibilities:</strong> <br />
                                            <ul className={style.customBullets}>
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
        </motion.div>
    )
}

export default Experience;