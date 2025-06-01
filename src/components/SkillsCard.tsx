import type { IconType } from "react-icons";

interface Technology {
    label: string;
    icon: IconType;
}

interface SkillsCardProps {
    title: string;
    technologies: Technology[];
}

function SkillsCard({ title, technologies }: SkillsCardProps) {
    return (
        <div className="bg-card border border-borderGrey rounded-2xl w-full max-w-sm lg:min-h-[200px] lg:flex lg:flex-col lg:justify-center">
            <h3 className="text-secundary mt-4 ml-4 text-2xl font-bold">{title}</h3>
            <ul className="mb-4 mx-4 flex flex-wrap">
                {technologies.map((tech, index) => (
                    <li
                        key={index}
                        className="text-secundary bg-techBg border border-borderGrey rounded inline-flex items-center gap-2 py-1 px-3 mt-4 mr-2 text-xs font-bold"
                    >
                        <tech.icon className="text-base" />
                        {tech.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsCard;
