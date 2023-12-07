import AnimatedText from "./AnimatedText";
import LinkButton from "./LinkButton";
import HireMe from "./HireMe";
import Image from "next/image";
import profilePic from "@/public/images/portrait.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Hero = () => {
  return (
    <div className="flex-between w-full flex-col gap-x-6 md:flex-row">
      <div className="w-full md:w-1/3">
        <Image
          src={profilePic}
          alt="hero"
          className=" h-auto w-full md:w-[35vw]"
        />
      </div>
      <div className="flex w-full flex-col items-center self-center md:w-2/3">
        {/* <span className="text-coral-red">Crafting </span>Digital Alchemy */}
        <AnimatedText
          text="Crafting Digital Alchemy with Code and Design"
          className="!text-left font-palanquin text-3xl md:text-6xl"
        />
        <p className="my-4 text-base font-medium">
          Transforming your ideas into tangible realitie is at the core of the
          solution I provide. Delve into my portfolio of the front-end and full
          stack projects with NextJS, mongoDB.
        </p>
        <div className="flex-center z-10 mt-2 self-start">
          <LinkButton
            label="Resume"
            href="http://www.google.com"
            className="border-transparent bg-dark font-semibold text-light shadow-md hover:border-dark hover:bg-light hover:text-dark hover:shadow-xl"
            isDownload={true}
            icon={<FileDownloadIcon className="ml-1 w-6" />}
          />
          <LinkButton
            label="Contact"
            href="mailto:gryan@outlook.com.au"
            className="ml-4 !border-[0] bg-light font-medium text-dark hover:underline"
            icon={<AlternateEmailIcon className="ml-1 w-6" />}
          />
        </div>
      </div>
      <HireMe />
    </div>
  );
};

export default Hero;
