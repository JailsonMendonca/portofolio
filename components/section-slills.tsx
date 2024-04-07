import { Frontend_skill, Backend_skill, Outhers_skill } from "@/lib/data"
import IconSkill from "./iconSkill"
import SkillText from "./skillText"

export default function SectionSlills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center 
       gap-3 h-full relative overflow-hidden"
      style={{
        transform:"scale(0.9)"
      }}
    >
      <SkillText>
        Minhas habilidades
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
