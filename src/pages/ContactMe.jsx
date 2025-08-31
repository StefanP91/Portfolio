import { Container, Row, Col } from "react-bootstrap"
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

import { useState } from "react";
import * as emailjs from 'emailjs-com';
import { motion } from "framer-motion";

import style from "../shared/styles/Pages.module.css";


const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setStatus('Sending message...');
            await emailjs.sendForm(
                'service_hkusm7o',   // EmailJS Service ID
                'template_582i59s',  // EmailJS Template ID
                e.target,       
                'F0HLyRnqcy6RTLe2i'       // EmailJS User ID
            );
            setStatus('Message sent successfully!');
        } catch (error) {
            setStatus('Failed to send message. Try again later.');
            console.error('Error:', error);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className={style.page}>
                <Container>
                    <h1 className={style.title}>Contact Me</h1>

                    <Row className="g-3">
                        <Col md={6}>
                            <div className={style.contactInfo}>
                                <h2>Contact Info</h2>
                                <div className={style.contactInfoDetails}>
                                    <div className="hstack gap-3">
                                        <span className={style.icon}><MdEmail /></span>
                                        <span>panov.office91@gmail.com</span>    
                                    </div>
                                    <div className="hstack gap-3">
                                        <span className={style.icon}><MdOutlinePhoneAndroid /></span>
                                        <span>+38978384409</span>    
                                    </div>
                                    <div className="hstack gap-3">
                                        <span className={style.icon}><FaLocationDot /></span>
                                        <span>Veles, Macedonia</span>    
                                    </div>
                                    <a href="https://www.linkedin.com/in/stefan-panov-61a64b144/">
                                        <div className="hstack gap-3">
                                            <span className={style.icon}><BsLinkedin /></span>
                                            <span>LinkedIn</span>    
                                        </div>
                                    </a>
                                    <a href="https://github.com/StefanP91">
                                        <div className="hstack gap-3">
                                            <span className={style.icon}><FaGithub /></span>
                                            <span>Git Hub</span>    
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>

                    <Col md={6}>
                        <div className={style.contactForm} id="contactForm">
                            <h2>Send me a message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    {/* <label htmlFor="name">Name</label> */}
                                    <input
                                        type="text"
                                        className={`form-control ${style.formInput}`}
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    {/* <label htmlFor="email">Email</label> */}
                                    <input
                                        type="email"
                                        className={`form-control ${style.formInput}`}
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    {/* <label htmlFor="message">Message</label> */}
                                    <textarea
                                        className={`form-control ${style.formInput}`}
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className={style.formBtn}>Send</button>
                            </form>
                            {status && <p className="text-white fw-bold mt-3">{status}</p>}
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>

        </motion.div>
    )
}
export default ContactMe