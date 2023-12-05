"use client";
import Link from "next/link";
import LogoName from "./LogoName";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex-center mt-2">
      <MotionLink
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        href="/"
        className="flex-center h-16 w-16 rounded-full bg-dark text-xl font-bold text-light"
      >
        <LogoName />
      </MotionLink>
    </div>
  );
};

export default Logo;
