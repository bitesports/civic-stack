import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Convergence from "@/components/Convergence";
import GlobalMap from "@/components/GlobalMap";
import Stack from "@/components/Stack";
import Layer0 from "@/components/Layer0";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Investment from "@/components/Investment";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemStatement />
      <Convergence />
      <GlobalMap />
      <Stack />
      <Layer0 />
      <Partners />
      <Team />
      <Investment />
      <CTASection />
      <Footer />
    </main>
  );
}
