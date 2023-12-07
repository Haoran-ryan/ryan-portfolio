"use client";
import SideBar from "./SideBar";
import Link from "next/link";
import Image from "next/image";
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
      className={`${className} group relative uppercase hover:text-dark ${
        pathName === href ? "text-dark" : "text-dark/50"
      }`}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="flex-between sticky top-0 z-10 w-full bg-light px-32 py-6 font-medium shadow-md">
      <Image
        src="/images/icon.png"
        alt="logo"
        width={40}
        height={40}
        className="hidden md:block"
      />

      <div className="hidden w-1/3 cursor-pointer md:block ">
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
          className=" hidden text-gray-700 lg:block"
        />
      </div>

      <nav>
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
      <nav className="flex-center gap-5 ">
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
      </nav>
      <SideBar />
    </header>
  );
};

export default NavBar;
