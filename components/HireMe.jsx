import Image from "next/image";
import LinkButton from "./LinkButton";
const HireMe = () => {
  return (
    <div className="flex-center fixed bottom-20 right-20 overflow-hidden">
      <div className="flex-center relative h-auto w-[300px]">
        <Image
          src="/images/Full_Stack_Development.png"
          alt="banner"
          width={300}
          height={300}
          className="animate-spin-slow rounded-full"
        />
        <LinkButton
          href=""
          label="Hire Me"
          className="fixed h-[130px] w-[130px] !rounded-full bg-dark text-center  text-light opacity-80 shadow-md hover:border-dark hover:bg-light hover:text-dark hover:opacity-100 hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default HireMe;
