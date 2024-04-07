import Hero from "@/components/hero";
import FormEmail from "@/components/formEmail";
import SectionDivider from "@/components/section-divider";
import SectionProjects from "@/components/section-projects";
import SectionSlills from "@/components/section-slills";


export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <SectionSlills />
      <SectionProjects />
    </main>
  );
}
