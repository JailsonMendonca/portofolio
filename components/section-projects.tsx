"use client";
import SectionProjectsCard from "./section-projectsCard";
import { useSectionInView } from "@/lib/hooks";
import SkillText from "./skillText"

export default function SectionProjects() {

  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <section
      ref={ref}
      id="Projetos"
      className="mt-10 scroll-mt-28"
    >
      <SkillText>
        Meus Projetos
      </SkillText >
      <SectionProjectsCard/>
    </section>
  )
}
