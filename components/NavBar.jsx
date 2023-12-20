"use client";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Image from "next/image";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import useThemeToggle from "@/hooks/useThemeToggle";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { socials, NavLinks } from "@/constants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const MotionLink = motion(Link);

export const NavLinkCard = ({ title, href, className = null }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${className} group relative uppercase hover:text-dark dark:text-light ${
        pathName === href ? "text-dark" : "text-dark/50"
      }`}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full dark:bg-light ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeToggle();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex-between sticky top-0 z-10 w-full bg-light px-32 py-6 font-medium shadow-md dark:bg-dark dark:shadow-white">
      <div
        onClick={handleMenuClick}
        className="relative  block cursor-pointer transition-all duration-300 ease-out xl:hidden"
      >
        <CloseIcon
          className={`absolute transition-opacity duration-300 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <MenuIcon
          className={`absolute transition-opacity duration-300 ease-out ${
            !isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <Image
        src="/images/icon.png"
        alt="logo"
        width={40}
        height={40}
        className="hidden lg:block"
      />

      <div className="hidden w-1/3 cursor-pointer lg:block ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "My name is Ryan Guo 👋",
            800,
            "I am a full stack developer 📱",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1rem" }}
          repeat={Infinity}
          className=" hidden text-gray-700 dark:text-coral-red lg:block"
        />
      </div>

      <nav className="hidden lg:block">
        {NavLinks.map((link) => (
          <NavLinkCard
            href={link.url}
            key={link.name}
            className={link.className}
            title={link.name}
          />
        ))}
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]"></div>
      {/* social icons */}
      <nav className="flex-center hidden gap-5 lg:block ">
        {socials.map((social) => (
          <MotionLink
            href={social.url}
            target={"_blank"}
            key={social.name}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </MotionLink>
        ))}
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={`flex-center ml-3  rounded-full p-1 ${
            mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        >
          {mode === "dark" ? (
            <LightModeIcon className="animate-spin-slow fill-dark" />
          ) : (
            <DarkModeIcon className="animate-spin-slow fill-light" />
          )}
        </button>
      </nav>
      <SideBar />
    </header>
  );
};

export default NavBar;
