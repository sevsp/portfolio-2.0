interface ProjectsCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}


function ProjectsCard({ image, title, description, technologies, link }: ProjectsCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-borderGrey rounded-2xl shadow max-w-sm hover:shadow-[0_0_15px_2px_#3f3f46] transition-shadow duration-200 flex flex-col"
        >
            <img className="rounded-t-2xl w-full" src={image} alt={title} />
            <h3 className="text-secundary mt-4 ml-4 text-2xl font-bold">{title}</h3>
            <p className="text-greyFont mt-4 mx-4">{description}</p>
            <ul className="mb-4 mx-4">
                {technologies.map((tech) => (
                    <li
                        key={tech}
                        className="text-secundary bg-techBg border border-borderGrey rounded inline-flex py-1 px-3 mt-4 mr-2 text-xs font-bold"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </a>

    );
}

export default ProjectsCard;