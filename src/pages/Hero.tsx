import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { VscVersions } from "react-icons/vsc";
import Typewriter from "../components/Typewriter";
import memoji from "../assets/memoji1.png";

function Hero() {
    return (
    <section id="about" className="h-screen flex flex-col justify-center md:flex-row md:items-center md:justify-center px-4 lg:mx-100">

        <div className="flex flex-col items-start md:w-2/3">
            
            <div className="flex gap-2 my-4 mx-3">
                <a  href="https://github.com/sevsp" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <BsGithub className="text-2xl mx-1 text-secundary" />
                </a>
                <a  href="https://www.linkedin.com/in/sebasti%C3%A1n-mendieta-3386b1285/"  
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl mx-1 text-secundary" />
                </a>
                <a  href="mailto:sebsmen467@gmail.com">
                    <MdEmail className="text-2xl mx-1 text-secundary" />
                </a>
            </div>


            <div>
                <h1 className="text-secundary text-4xl my-4 mx-3">
                    Hello, I'm <span className="font-bold">Sebastián Mendieta</span>
                </h1>
                <Typewriter />
                <a
                    href="/SebastianMendietaCVEnglish.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secundary border border-white/20 px-4 py-2 rounded inline-flex items-center gap-2 my-1 mx-3 hover:bg-[#2a2a2a] transition-colors duration-200"
                >
                    <VscVersions />
                    <span>Resume</span>
                </a>
            </div>
        </div>


            <div className="hidden md:flex justify-center items-center ">
                <img
                    src={memoji}
                    alt="Memoji Sebastián"
                    className="max-w-xs aspect-square object-contain"
                />
            </div>
    </section>
    );
}

export default Hero;
