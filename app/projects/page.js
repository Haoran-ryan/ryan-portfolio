// "use client";
import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MyProjects } from "@/constants";

export const ProjectCard = ({ className = "", project, isFullWidth }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <article
        className={`${
          isFullWidth
            ? "flex-between rounded-3xl p-12"
            : "flex-center  flex-col rounded-2xl p-6"
        } relative  h-[95%] w-[95%] rounded-br-2xl border border-solid  border-dark bg-light shadow-xl hover:shadow-2xl`}
      >
        {/* dark 3d effect */}
        <div
          className={`absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-br-3xl ${
            isFullWidth ? "rounded-[2.5rem]" : "rounded-[2rem]"
          } bg-dark`}
        />
        <Link
          href={project.orgLink}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image
            src={project.img}
            width={1000}
            height={400}
            alt={project.label}
            className="h-auto w-full"
          />
        </Link>
        <div
          className={`flex flex-col items-start justify-between ${
            isFullWidth ? "w-1/2  pl-6" : "mt-4 w-full"
          }`}
        >
          <span className="text-xl font-medium text-primary">
            {project.type}
          </span>
          <Link
            href={project.orgLink}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            <h2
              className={`${
                isFullWidth ? " text-4xl " : "text-3xl"
              } my-2 w-full text-left font-bold`}
            >
              {project.label}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark ">{project.work}</p>
          <div
            className={`mt-2  ${
              isFullWidth ? "flex-center" : "flex-between w-full"
            }`}
          >
            <Link
              href={project.orgLink}
              className={`${isFullWidth ? "w-10" : "w-8"}`}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href={project.orgLink}
              className={`rounded-lg font-semibold  ${
                isFullWidth
                  ? "ml-4 bg-dark p-2 px-6 text-lg text-light "
                  : "underline"
              }`}
            >
              {isFullWidth ? "Visit Project" : "Visit"}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Ryan Guo | Project page</title>
        <meta name="description" content="work and education about Ryan Guo" />
      </Head>
      <main className="flex-center mb-64 w-full flex-col">
        <Container className="pt-16">
          <AnimatedText
            text="Tech Dreams Gallery!"
            className="pb-20 text-6xl md:text-8xl"
          />
          {/* grid layout display */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 overflow-x-hidden">
            {MyProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                href={project.orgLink}
                className={`${index % 3 === 0 ? "col-span-12" : "col-span-6"}`}
                isFullWidth={index % 3 === 0}
              />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default page;
