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
import {
  SiPostman,
  SiNotion,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdTranslate } from "react-icons/md";

function Skills() {
  return (
    <section className="flex flex-col items-center mt-20">
      <h2 className="text-secundary mt-2 mb-10 text-3xl font-bold">
        Skills & Technologies
      </h2>
      <div className="flex flex-col items-center gap-6">
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
