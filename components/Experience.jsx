"use client";

import Circle from "./Circle";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export const ExperienceCard = ({
  label,
  org,
  orgLink,
  time,
  address,
  work,
  className = "",
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className={`${className} flex-between mx-auto my-8 w-[68%] flex-col`}
    >
      <Circle reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize">
          {label} &nbsp;{" "}
          <Link
            href={orgLink}
            className="capitalize text-coral-red"
            target="_blank"
          >
            @{org}
          </Link>
        </h3>
        <span className="font-medium capitalize text-dark/75 ">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = ({ experiences, title }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    // layoutEffect: false,
  });
  return (
    <>
      <h2 className="my-64 w-full text-center text-8xl font-bold text-dark/90">
        {title}
      </h2>
      <div className="relative mx-auto w-[75%]">
        {/* vertical scroll animation */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 h-full w-[4px] origin-top bg-dark"
          ref={ref}
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between overflow-x-hidden">
          {experiences.map((project, index) => (
            <ExperienceCard
              key={project.label}
              label={project.label}
              org={project.org}
              orgLink={project.orgLink}
              time={project.time}
              work={project.work}
              address={project.address}
              className={
                index === 0
                  ? "mt-0"
                  : "" || index === experiences.length - 1
                  ? "mb-0"
                  : ""
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Experience;
