import Image from "next/image";
import LinkButton from "./LinkButton";
const HireMe = () => {
  return (
    <div className="flex-center fixed bottom-4 right-2 overflow-hidden">
      <div className="flex-center relative h-auto w-[300px]">
        <Image
          src="/images/Full_Stack_Development.png"
          alt="banner"
          width={480}
          height={480}
          className="animate-spin-slow fill-dark"
        />
        <LinkButton
          href=""
          label="Hire Me"
          className="fixed h-[120px] w-[120px] !rounded-full text-center !text-2xl shadow-md hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default HireMe;
