import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../main-section-components/Hero"
import AboutMe from "../main-section-components/About-me";
import Projects from "../main-section-components/Projects";
import ContactMe from "../main-section-components/Contact-me";

const Main = () => {

    return (
        <main>
            <Hero />

            <AboutMe />

            <Projects />

            <ContactMe />
        </main>
    )

}

export default Main