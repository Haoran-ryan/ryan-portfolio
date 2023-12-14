"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerChildren, footerVariants } from "@/utils/motions";
import { myFullStack } from "@/constants";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

export const skills = ["ReactJS", "NextJS", "Python", "Tailwind", "MongoDB"];
const Footer = () => {
  return (
    <motion.footer
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-20 w-full border-t-2 border-solid border-dark pt-5 font-medium dark:border-light"
    >
      <motion.div variants={footerVariants} className="flex-center my-10">
        <div className="ml-20 flex-auto text-2xl font-bold leading-loose text-dark dark:text-light xl:ml-40">
          <span>Let us make something amazing together</span>
          <br />
          <span>
            Start by{" "}
            <Link
              href="mailto:gryan@outlook.com.au"
              className="cursor-pointer hover:underline hover:shadow-sm"
            >
              <span className=" blue_gradient text-3xl ">
                saying &quot;Hi&quot; {<LoyaltyIcon color="primary" />}
              </span>
            </Link>
          </span>
        </div>
        <div className="flex-1">
          <div className={`flex-start flex-wrap gap-6`}>
            {myFullStack.map((skill) => (
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                key={skill.name}
                className="cursor-pointer rounded-full hover:shadow-md dark:bg-light/90"
              >
                <Image
                  src={skill.imgUrl}
                  alt={skill.name}
                  width={45}
                  height={45}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="flex-center my-8 font-palanquin text-sm text-neutral-500">
        {new Date().getFullYear()}&copy; All Rights Reserved
      </div>
    </motion.footer>
  );
};

export default Footer;
