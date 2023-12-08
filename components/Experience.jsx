"use client";
import Link from "next/link";
import { MyExperiences } from "@/constants";
import { useScroll, useMotionValue } from "framer-motion";

export const ExperienceCard = ({
  label,
  org,
  orgLink,
  time,
  address,
  work,
  className = "",
}) => {
  return (
    <li className={`${className} flex-between mx-auto my-8 w-[68%] flex-col`}>
      <div>
        <h3 className="text-2xl font-bold capitalize">
          {label} &nbsp;{" "}
          <Link
            href={orgLink}
            className="capitalize text-primary"
            target="_blank"
          >
            @{org}
          </Link>
        </h3>
        <span className="font-medium capitalize text-dark/75 ">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <h2 className="my-64 w-full text-center text-8xl font-bold text-dark/90">
        Experience
      </h2>
      <div className="relative mx-auto w-[75%]">
        <div className="absolute left-8 top-0 h-full w-[4px] origin-top bg-dark" />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          {MyExperiences.map((project, index) => (
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
                  : "" || index === MyExperiences.length - 1
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
