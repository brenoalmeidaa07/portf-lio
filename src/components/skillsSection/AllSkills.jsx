import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import SingleSkill from "./SingleSkill";
import { fadeIn } from "../../framerMotion/variants";

// Lista de habilidades e seus respectivos ícones
const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "ReactJS", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: RiTailwindCssFill },
];

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map(({ name, icon: Icon }, index) => (
        <motion.div
          key={name}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SingleSkill text={name} imgSvg={<Icon />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
