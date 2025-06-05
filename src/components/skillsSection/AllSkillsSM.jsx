import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJs", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJs", icon: SiNextdotjs },
  { skill: "TailWindCSS", icon: RiTailwindCssFill },
];

const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0 }}
          key={index} className='flex flex-col items-center'>
          <item.icon className='text-7xl text-orange' />
          <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSm;
