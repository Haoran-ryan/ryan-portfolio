"use client";
import { motion } from "framer-motion";
import { myFullStackSkills, getRandomNumber } from "@/constants";

export const SkillCard = ({ label, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.01 }}
      viewport={{ once: false, amount: 0.25 }}
      className="flex-center absolute animate-pulse cursor-pointer rounded-full border-dark bg-dark px-6 py-3 font-semibold text-light opacity-80 shadow-sm hover:z-50 hover:animate-none hover:border hover:bg-light hover:text-dark/75 hover:opacity-100 hover:shadow-xl"
    >
      {label}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-8xl font-bold text-dark/90">
        Skills
      </h2>
      <div className="flex-center relative h-screen w-full overflow-y-hidden rounded-full bg-circularLight">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex-center cursor-pointer rounded-full bg-dark px-6 py-10 text-light shadow-dark"
        >
          Full Stack
        </motion.div>
        {myFullStackSkills.map((skill) => (
          <SkillCard
            key={skill.name}
            label={skill.name}
            x={`${getRandomNumber(-28, 28)}vw`}
            y={`${getRandomNumber(-28, 28)}vh`}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
