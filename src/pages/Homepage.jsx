import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import style from "../shared/styles/Homepage.module.css";

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={style.heroSection}
        >
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={12} md={6} className={style.colMd6}>
                        <div className={style.leftSide}>
                            <h1>Hi, My name is <span className={style.heroName}></span></h1>
                            <h3>Full-stack Developer</h3>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className={style.rightSide}>
                            <img className={style.heroImg} src="images/Stefan Panov- Final1.png" alt="hero" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Hero;