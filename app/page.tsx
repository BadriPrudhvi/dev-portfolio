import { HeroHighlightSection } from "@/components/Hero";
import { BentoGridThirdDemo } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { ContactSection } from "@/components/Contact";
import { DotBackground, GradientBackground } from "@/components/ui/backgrounds";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <DotBackground>
        <HeroHighlightSection />
      </DotBackground>
      
      <GradientBackground>
        <Stats />
      </GradientBackground>
      
      <DotBackground>
        <section id="projects" className="w-full px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <BentoGridThirdDemo />
        </section>
      </DotBackground>
      
      <ContactSection />
    </main>
  );
}
