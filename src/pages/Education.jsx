import { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { motion } from "framer-motion";

import AOS from 'aos';

import 'aos/dist/aos.css';

import style from "../shared/styles/Pages.module.css"

const Education = () => {
    useEffect(() => {
            AOS.init({
                offset: 120,
                duration: 1000, 
                once: false, 
            });
        },[])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} 
        >
            <section className={style.page}>
                <Container>
                    <h1 className={style.title}>Education</h1>

                    <div>
                        <Row className="g-4" data-aos="fade-up" data-aos-duration="1500">
                            <Col md={6}>
                                <h2 className="text-white text-center mb-3">Front-end Development</h2>
                                <Card>
                                    <Card.Body>
                                        <img src="images/front-end-certificate.jpg" alt="front-end-certificate" className="img-fluid" />
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <h2 className="text-white text-center mb-3">Back-end Development</h2>
                                <Card>
                                    <Card.Body>
                                        <img src="images/back-end certificate.jpg" alt="back-end-certificate" className="img-fluid" />
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <h2 className="text-white text-center mb-3">EU Diploma Supplement</h2>
                                <Card>
                                    <Card.Body>
                                        <img src="images/eu-supplement.jpg" alt="eu-supplement" className="img-fluid" />
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>
                    </div>
                </Container>
            </section>
        </motion.div>
    )
}

export default Education;