import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";


const ContactMe = () => {
    return (
        <>

            <div className="contact-section" id="contactMe">
                <Container>
                    <h1 className="contact-header">Contact Me</h1>

                    <Row>
                        <Col md={6}>
                            <div className="contact-info">
                                <h2>Contact Info</h2>
                                <div className="contact-info-details">
                                    <div className="hstack gap-3">
                                        <span className="icon"><MdEmail /></span>
                                        <span>panov.office91@gmail.com</span>    
                                    </div>
                                    <div className="hstack gap-3">
                                        <span className="icon"><MdOutlinePhoneAndroid /></span>
                                        <span>+38978384409</span>    
                                    </div>
                                    <div className="hstack gap-3">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span>Veles, Macedonia</span>    
                                    </div>
                                    <a href="https://www.linkedin.com/in/stefan-panov-61a64b144/">
                                        <div className="hstack gap-3">
                                            <span className="icon"><BsLinkedin /></span>
                                            <span>LinkedIn</span>    
                                        </div>
                                    </a>
                                    <a href="https://github.com/StefanP91">
                                        <div className="hstack gap-3">
                                            <span className="icon"><FaGithub /></span>
                                            <span>Git Hub</span>    
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="contact-form">
                                <h2>Send me a message</h2>
                                <form action="https://formsubmit.co/720042e77f81d6ab796e456758651e45" method="POST">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name"></label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email"></label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="message"></label>
                                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"  required></textarea>
                                    </div>
                                    <button type="submit" className="form-btn">Send</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default ContactMe