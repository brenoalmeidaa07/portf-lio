import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const experiences = [
  {
    job: 'Front-End Developer',
    company: 'Diário Link',
    date: 'Jul 2023 - Mar 2024',
    responsibilities: [
      'Interface development with React and Next.js.',
      'Using Material UI to create reusable components.',
      'Collaboration with an agile team for maintenance and evolution of internal systems.',
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-16 min-h-screen text-center">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
