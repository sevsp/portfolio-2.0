import ProjectsCard from "../components/ProjectsCard";
import passwordGeneratorPreview from "../assets/passwordGeneratorPreview.png";


function Projects() {
    return(
        <section className="flex flex-col">
            <h2 className="text-secundary">Projects</h2>
            <div>
                <ProjectsCard 
                    image={passwordGeneratorPreview}
                    title="Password Generator"
                    description="A simple and customizable password generator that allows users to create secure passwords based on selected criteria such as length, numbers, symbols, and uppercase letters. Built with a clean interface and responsive design."
                    technologies={["Tailwind", "JavaScript"]}
                    link="https://passwordgeneratormendietadev.netlify.app/"
                />
            </div>
        </section>
    );
}

export default Projects;