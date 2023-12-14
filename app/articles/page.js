import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
const page = () => {
  return (
    <main className="flex-center mb-64">
      <Container className={`flex-center w-full pt-16`}>
        <AnimatedText
          text="Coming soon ..."
          className="pb-20 text-6xl md:text-8xl"
        />
      </Container>
    </main>
  );
};

export default page;
