"use client"
import { Frontend_skill, Backend_skill, Outhers_skill } from "@/lib/data"
import IconSkill from "./iconSkill"
import SkillText from "./skillText"
import { useSectionInView } from "@/lib/hooks";

export default function SectionSlills() {
    
  const { ref } = useSectionInView("Habilidades", 0.5);

  return (
    <section
      id="Habilidades"
      className="flex flex-col items-center justify-center 
       gap-3 h-full relative overflow-hidden"
      style={{
        transform:"scale(0.9)"
      }}
      ref={ref}
    >
      <SkillText>
        Minhas Abilidades
      </SkillText >
      <div className="flex  flex-row justify-around flex-wrap 
        mt-4 gap-5 items-center"
      >
        {Frontend_skill.map((image, index) => (
          <IconSkill
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap 
        mt-4 gap-5 items-center"
      >
        {Backend_skill.map((image, index) => (
          <IconSkill
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap 
        mt-4 gap-5 items-center"
      >
        {Outhers_skill.map((image, index) => (
          <IconSkill
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
