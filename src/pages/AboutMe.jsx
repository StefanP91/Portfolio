import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"
import { motion } from "framer-motion";

import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaPhp, FaLaravel } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiXdadevelopers, SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

import AOS from 'aos';

import 'aos/dist/aos.css';
import style from "../shared/styles/Pages.module.css"


const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 1000, 
            once: true, 
            disable: false,
        });
    },[])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className={style.page}>
                <Container>
                    <h1 className={style.title}>About Me</h1>
                    <p className={style.aboutIntro}>
                        I'm <span className={style.devName}></span>
                    </p>
                    <p className={style.aboutDescription}>
                        A detail-oriented full-stack developer who transforms ideas into 
                        reality through clean code, intuitive UX/UI design, and SEO-optimized implementations. 
                        I specialize in building responsive web applications with robust backend architectures, 
                        scalable databases, and secure APIs—delivering exceptional user experiences across all devices.                   
                    </p>

                    <h1 className={style.subtitle}>Skills</h1>
                    <div>
                        {/* First Row*/}
                        <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500">
                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaHtml5 /> HTML5</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaCss3 /> CSS3</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><RiJavascriptFill /> JavaScript</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaReact /> React</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Second Row*/}
                        <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaBootstrap /> Bootstrap</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaGitAlt /> Git</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaGithub /> GitHub</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><FaPhp /> PHP</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                         {/* Third Row*/}
                         <Row style={{marginBottom: "10px"}} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                         <Card.Title><BsFiletypeSql /> SQL</Card.Title>                            
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                        <Card.Title><SiMysql /> MySQL</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardSkills}>
                                    <Card.Body>
                                         <Card.Title><SiXdadevelopers /> Web Development</Card.Title>                            
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3} xs={12}>
                                <Card className={style.cardLearning}>
                                    <Card.Body>
                                        <Card.Title><FaLaravel /> Laravel</Card.Title>
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

export default AboutMe