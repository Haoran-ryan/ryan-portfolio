"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ number }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const sprintValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    sprintValue.on("change", (latest) => {
      console.log(latest);
      if (ref.current && latest.toFixed(0) <= number) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [sprintValue, number]);

  return <span ref={ref}>AnimatedNumbers</span>;
};

export default AnimatedNumbers;
