import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { VscVersions } from "react-icons/vsc";
import Typewriter from "../components/Typewriter";






function Hero() {   
    return(
        <section className="h-screen flex flex-col justify-center">
            <div className="flex gap-2 my-4 mx-3">
                <a href="#"><BsGithub className="text-2xl mx-1 text-secundary" /></a>
                <a href="#"><FaLinkedin className="text-2xl mx-1 text-secundary" /></a>
                <a href="#"><MdEmail className="text-2xl mx-1 text-secundary" /></a>
            </div>
            <div>
                <h1 className="text-secundary text-4xl my-4 mx-3">Hello, I'm <span className="font-bold">Sebastián Mendieta</span></h1>
                <Typewriter />
                <a
                href="../../public/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secundary border border-white/20 px-4 py-2 rounded inline-flex items-center gap-2 my-1 mx-3"
                >
                <VscVersions />
                <span>Resume</span>

                </a>
            </div>
        </section>
    );
}

export default Hero;