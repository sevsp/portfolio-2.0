import ProjectsCard from "../components/ProjectsCard";
import passwordGeneratorPreview from "../assets/passwordGeneratorPreview.png";
import adviceGeneratorPreview from "../assets/adviceGeneratorPreview.png"
import blogCafePreview from "../assets/blogCafePreview.png"



function Projects() {
    return(
        <section id="projects" className="flex flex-col items-center pt-24 mx-5">
            <h2 className="text-secundary mb-10 text-3xl font-bold">Projects</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                <ProjectsCard 
                    image={passwordGeneratorPreview}
                    title="Password Generator"
                    description="A simple and customizable password generator that allows users to create secure passwords based on selected criteria such as length, numbers, symbols, and uppercase letters. Built with a clean interface and responsive design."
                    technologies={["JavaScript", "React", "Tailwindcss"]}
                    link="https://passwordgeneratormendietadev.netlify.app/"
                />
                <ProjectsCard 
                    image={adviceGeneratorPreview}
                    title="Advice Generator"
                    description="An interactive advice generator app that fetches random pieces of advice from a public API. Designed with a clean and modern UI, it offers users simple yet meaningful tips with every click."
                    technologies={["JavaScript", "React", "Tailwindcss"]}
                    link="https://advicesevps.netlify.app/"
                />
                <ProjectsCard 
                    image={blogCafePreview}
                    title="Blog Cafe"
                    description="A modern coffee blog featuring expert advice, recipes, and free workshops. Users can explore brewing techniques, read blog entries, and access course information in a clean, responsive layout. Built for coffee lovers who want to learn and connect."
                    technologies={["JavaScript", "React", "SASS"]}
                    link="https://blogcafemendieta.netlify.app/"
                />
            </div>
        </section>
    );
}

export default Projects;