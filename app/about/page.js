import AnimatedText from "@/components/AnimatedText";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Head from "next/head";
import Container from "@/components/Container";
import Skills from "@/components/Skills";
import Image from "next/image";
import { bio, statistics } from "@/constants";
import profilePicture from "public/images/portrait-front-bg-removed.png";
import Experience from "@/components/Experience";

export const StaticCard = ({ statistics }) => {
  return (
    <div className="flex flex-col items-end justify-center">
      <span className="inline-block text-7xl font-bold text-coral-red">
        <AnimatedNumbers number={statistics.value} /> {`+`}
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/60">
        {statistics.label}
      </h2>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Head>
        <title>Ryan Guo | About page</title>
        <meta name="description" content="work and education about Ryan Guo" />
      </Head>
      <main className="flex-center">
        <Container className="flex-center w-full flex-col">
          <AnimatedText
            text={bio.title}
            className="py-20 text-6xl md:text-8xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex-between col-span-full flex-col md:col-span-3 ">
              <h2 className="mb-20 text-3xl font-bold uppercase text-dark/75 md:mb-4">
                {bio.subtitle}
              </h2>
              {bio.bio.map((para, index) => (
                <p
                  key={index}
                  className={`font-medium ${
                    index !== 0 && index !== bio.bio.length - 1 ? "my-4" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
            {/* Profile picture */}
            <div className="relative z-40 col-span-full h-max rounded-[2rem] border-2 border-solid border-dark bg-dark p-8 md:col-span-4">
              <div className="absolute -top-4 right-3 -z-10 h-full  w-full rounded-2xl border border-neutral-100 bg-light shadow-md" />
              <Image
                src={profilePicture}
                alt="portrait front"
                className=" h-auto w-full rounded-2xl "
              />
            </div>
          </div>
          {/* statistics */}
          <div className="flex-between mx-40 mt-20">
            {statistics.map((stat) => (
              <StaticCard key={stat.label} statistics={stat} />
            ))}
          </div>
          <Skills />
          <Experience />
        </Container>
      </main>
    </>
  );
};

export default About;
