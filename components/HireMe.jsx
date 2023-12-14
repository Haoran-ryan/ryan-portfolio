"use client";

import { useState } from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const HireMe = () => {
  const [open, setOpen] = useState(true);
  const handleStackClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex-center fixed bottom-40 right-20 overflow-hidden">
      <div
        className={`flex-center relative h-auto w-[300px] dark:text-light ${
          open ? "" : "!invisible"
        }`}
      >
        <Image
          src="/images/Full_Stack_Development.png"
          alt="banner"
          width={300}
          height={300}
          className="animate-spin-slow rounded-full dark:opacity-0"
        />
        <LinkButton
          href=""
          label="Hire Me"
          className="fixed h-[130px] w-[130px] !rounded-full bg-dark text-center  text-light opacity-80 shadow-md hover:border-dark  hover:bg-light hover:text-dark hover:opacity-100 hover:shadow-lg dark:bg-light dark:text-dark  dark:shadow-orange-200 hover:dark:font-bold"
        />
      </div>
      <div
        onClick={handleStackClick}
        className="absolute bottom-16 right-10 cursor-pointer"
      >
        {open ? (
          <UnfoldLessIcon
            fontSize="large"
            className="hover:scale-150 hover:animate-pulse"
          />
        ) : (
          <UnfoldMoreIcon
            fontSize="large"
            className="animate-bounce hover:scale-150 hover:animate-none"
          />
        )}
      </div>
    </div>
  );
};

export default HireMe;
