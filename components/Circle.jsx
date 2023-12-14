"use client";

import { motion, useScroll } from "framer-motion";

const Circle = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="absolute left-0 -translate-y-10 stroke-dark dark:stroke-light">
      <svg className="rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" fill-none stroke-coral-red stroke-1 dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" fill-light stroke-[5px] dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse fill-coral-red stroke-1 dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default Circle;
