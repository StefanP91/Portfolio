import { Col, Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'

const Hero = () => {

    return (
        <>
            <div className="hero-section">
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={6} className="h-100">
                            <div className="hero-section-left-side">
                                <h1>Hi, My name is <span className="hero-name"></span></h1>
                                <h3>Front-end Developer</h3>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="hero-section-right-side">
                                <img className="hero-img" src="/hero.jpg" alt="hero" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
        
}

export default Hero