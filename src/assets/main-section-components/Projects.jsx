import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css'

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    const projects = [
        {
            name: 'City of Miami',
            description: 'Website for department of economic innovation and development of City of Miami',
            languages: 'HTML, CSS, JavaScript, Bootstrap',
            link: 'https://cityofmiami.netlify.app/',
            img: 'images/city-of-miami.png',
        },
        {
            name: 'ZFK-Veles',
            description: 'Website for female football club from Veles, Macedonia',
            languages: 'HTML, CSS, Bootstrap',
            link: 'https://stefanp91.github.io/ZFK-Veles-/',
            img: 'images/zfk-borec.png',
        },

        {
            name: 'Landing Page CH',
            description: 'Landing page for Creative Hub Macedonia',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://landing-page-ch.netlify.app/',
            img: 'images/landing-page-ch.png',
        },

        {
            name: 'Miami Tech for Good',
            description: 'Landing page for Miami Tech for Good',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://miami-tech-for-good.netlify.app/',
            img: 'images/miami-tech-for-good.png',
        },

        {
            name: 'Real Estate',
            description: 'PHP project for real estate agency',
            languages: 'PHP, SQL, MySQL, Bootstrap, JavaScript',
            link: 'http://real-estate-project.free.nf/',
            img: 'images/real-estate.png',
        },

        {
            name: 'Web Shop',
            description: 'Full Stack project for Web Shop',
            languages: 'HTML, CSS, JavaScript, Bootstrap, PHP, SQL, MySQL',
            link: '',
            img: '',
        },

        {
            name: 'Detect-ion',
            description: 'Landing page for Detect-ion',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://detect-ion-1.netlify.app',
            img: 'images/detect-ion.png',
        },

        {
            name: 'Digital Marketing ver.1',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, JavaScript, Bootstrap',
            link: 'https://digital-marketing-ver-1.netlify.app/',
            img: 'images/digital-marketing.png',
        },
        {
            name: 'Digital Marketing ver.2',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, JavaScript, Bootstrap',
            link: 'https://digital-marketing-ver-2.netlify.app/',
            img: 'images/digital-marketing-2.png',
        },

        {
            name: 'Front-end',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, JavaScript, Bootstrap',
            link: 'https://front-end-chk.netlify.app/',
            img: 'images/front-end.png',
        },

        {
            name: 'Human Resources',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, JavaScript, Bootstrap',
            link: 'https://hr-chk.netlify.app/',
            img: 'images/hr.png',
        },

        {
            name: 'Data Science',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, JavaScript, Bootstrap',
            link: 'https://data-science-chk.netlify.app/',
            img: 'images/data-science.png',
        },

        {
            name: 'Tech Job Fair',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, Bootstrap',
            link: 'https://creativehubkos.com/tech-job/',
            img: 'images/tech-job-fair.png',
        },

        {
            name: 'Cities',
            description: 'Web page for cities',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://worldwidecities.netlify.app',
            img: 'images/cities.png',
        },

        
    ]

    const[selectedProject, setSelectedProject] = useState(null);

    const handleClick = (projectName) => {
        const project = projects.find(p => p.name === projectName);
    
        setSelectedProject(project);

        selectedProject === project ? 'active' : '';
    }

    function Project({ project }) {
    
        return (
            <div className="project" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
                <img className="project-img" src={project.img} alt={project.name} />
                <div className="project-description">
                    <h2 className="project-title">{project.name}</h2>
                    <p>{project.description}</p>
                    <p> <span className="project-languages">Languages:</span> {project.languages}</p>
                    <a href={project.link} target="_blank">
                        <button className="project-btn">Visit</button>
                    </a>
                </div>
            </div>
        )
        
    }

    return (
        <>
            <div className="project-section" id="projects">
                <Container>
                    <h1 className="project-header">Projects</h1>
                    <Row>
                        <Col md={3}>
                            <div className="projects-left-side">

                                <ul className="project-list">
                                    {projects.map(project => 
                                    <li 
                                        key={project.name} 
                                        onClick={() => handleClick(project.name)}
                                        className={selectedProject?.name === project.name ? 'active' : ''}
                                        >
                                            {project.name}
                                    </li>
                                    )}
                                
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="projects-right-side">
                                {selectedProject ? (
                                    <Project project={selectedProject}  />
                                ) 
                                
                                : 
                                (
                                    <p className="project-right-side-intro-text">Select a project to see details</p>
                                )
                                }
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Projects