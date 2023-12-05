import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex-center relative min-h-screen text-dark">
      <Container>
        <Hero />
        <Footer />
      </Container>
    </main>
  );
}
