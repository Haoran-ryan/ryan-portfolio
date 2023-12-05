"use client";
import { motion } from "framer-motion";
import { quote, singleWord } from "@/utils/motions";
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="flex-center mx-auto w-full overflow-hidden py-2 text-center">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full font-bold capitalize text-dark`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className={`inline-block ${index === 1 ? "text-coral-red" : ""}`}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
