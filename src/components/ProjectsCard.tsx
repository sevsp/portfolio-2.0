interface ProjectsCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}


function ProjectsCard({ image, title, description, technologies, link }: ProjectsCardProps) {
    return(
        <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card rounded-2xl shadow p-2 max-w-sm hover:shadow-lg transition flex flex-col justify-center">
            <img src={image} alt={title} />
            <h3 className="text-secundary">{title}</h3>
            <p className="text-secundary">{description}</p>
            <ul>
                {technologies.map((tech) => (
                    <li key={tech} className="text-secundary border rounded inline-flex py-1 px-1 my-1 mx-1">
                        {tech}
                    </li>
                ))}
            </ul>
        </a>
    );
}

export default ProjectsCard;