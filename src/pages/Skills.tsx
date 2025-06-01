import SkillsCard from "../components/SkillsCard";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaSass,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import { SiPostman, SiNotion } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdTranslate } from "react-icons/md";

function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center mt-20 pt-24 mx-5">
            <h2 className="text-secundary mt-2 mb-10 text-3xl font-bold">
                Skills & Technologies
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 w-full max-w-6xl">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch"></div>

                <SkillsCard
                    title="Languages & Frameworks"
                    technologies={[
                        { label: "HTML", icon: FaHtml5 },
                        { label: "CSS", icon: FaCss3Alt },
                        { label: "JavaScript", icon: FaJs },
                        { label: "React", icon: FaReact },
                        { label: "React Native", icon: TbBrandReactNative },
                        { label: "SASS", icon: FaSass },
                        { label: "Bootstrap", icon: FaBootstrap },
                        { label: "PI/SQL", icon: AiOutlineConsoleSql },
                    ]}
                />
                <SkillsCard
                    title="Tools"
                    technologies={[
                        { label: "Visual Studio Code", icon: DiVisualstudio },
                        { label: "Postman", icon: SiPostman },
                        { label: "Notion", icon: SiNotion },
                        { label: "GitHub", icon: FaGithub },
                        { label: "Git", icon: FaGitAlt },
                    ]}
                />
                <SkillsCard
                    title="Spoken Languages"
                    technologies={[
                        { label: "Spanish • Native", icon: MdTranslate },
                        { label: "English • Intermediate", icon: MdTranslate },
                    ]}
                />
            </div>
        </section>
    );
}

export default Skills;
