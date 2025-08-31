import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react";
import { motion } from "framer-motion";

import AOS from 'aos';
import 'aos/dist/aos.css';
import style from '../shared/styles/Pages.module.css'

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
            link: 'https://real-estate-project.free.nf/',
            img: 'images/real-estate.png',
        },

        {
            name: 'Web Shop',
            description: 'Full Stack project for Web Shop',
            languages: 'HTML, CSS, React, Bootstrap, PHP, SQL, MySQL',
            link: 'https://webshop.free.nf/',
            img: 'images/webshop.png',
        },

        {
            name: 'E Shop',
            description: 'Website for local shop',
            languages: 'HTML, CSS, Bootstrap, PHP, SQL, MySQL',
            link: 'https://platfromshop.rf.gd/',
            img: 'images/e-shop.png',
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

        {
            name: 'Business Analytics',
            description: 'Landing page for Business Analytics',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://business-analytics-course.netlify.app/',
            img: 'images/ba-course.png',
        },

        {
            name: 'Recruitment Course',
            description: 'Landing page for Recruitment Course',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://recruitment-course.netlify.app/',
            img: 'images/recruitment-course.png',
        },
        {
            name: 'Project Management',
            description: 'Landing page for AI Project Management Course',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://chk-project-management.netlify.app/',
            img: 'images/project-management.png',
        },
        {
            name: 'AI for Business',
            description: 'Landing page for AI Business Course',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://chk-ai-for-business.netlify.app/',
            img: 'images/ai-business.png',
        },
        {
            name: 'Full Stack',
            description: 'Landing page for Full Stack Course',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://chk-full-stack.netlify.app/',
            img: 'images/full-stack.png',
        },
        {
            name: 'Tech Community',
            description: 'Landing page for Tech Community',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://chk-tech-community.netlify.app/',
            img: 'images/tech-community.png',
        },
        {
            name: 'CH Landing page',
            description: 'Homepage for Creative Hub Kosovo',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://chk-homepage.netlify.app/',
            img: 'images/chk-homepage.png',
        },
        {
            name: 'AI Conference',
            description: 'Landing Page for AI Conference',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://chk-ai-conference.netlify.app/',
            img: 'images/ai-conference.png',
        },

        {
            name: 'AI Executive Workshop',
            description: 'Landing Page for AI Executive Workshop',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://ai-executive-workshop.netlify.app/',
            img: 'images/ai-executive-workshop.png',
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
            <div className={style.projects} data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
                <img className={style.projectImg} src={project.img} alt={project.name} />
                <div className={style.projectDescription}>
                    <h2 className={style.projectTitle}>{project.name}</h2>
                    <p>{project.description}</p>
                    <p> <span className={style.projectLanguages}>Languages:</span> {project.languages}</p>
                    <a href={project.link} target="_blank">
                        <button className={style.projectBtn}>Visit</button>
                    </a>
                </div>
            </div>
        )
        
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} 
        >
            <div className={style.page}>
                <Container>
                    <h1 className={style.title}>Projects</h1>
                    <Row>
                        <Col xs={12} md={3}>
                            <div className={style.projectsLeftSide}>

                                <ul className={style.projectList}>
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
                        <Col xs={12} md={9}>
                            <div className={style.projectsRightSide}>
                                {selectedProject ? (
                                    <Project project={selectedProject}  />
                                ) 
                                
                                : 
                                (
                                    <p className={style.projectRightSideIntroText}>Select a project to see details</p>
                                )
                                }
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </motion.div>
    )
}

export default Projects