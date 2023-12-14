import Container from "@/components/Container";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="flex-center relative min-h-screen text-dark dark:text-light">
      <Container>
        <Hero />
      </Container>
    </main>
  );
}
