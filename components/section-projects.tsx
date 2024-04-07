"use client";
import React, { useState, useRef } from "react";
import CardProject from "./cardProject";
import { ProjectData } from "@/lib/data"
import { motion, useInView } from "framer-motion";
import Filter from "./filter";
import SkillText from "./skillText"

export default function SectionProjects() {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:string) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project: any) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="mt-10"
    >
      <SkillText>
        Meus projetos
      </SkillText >
      <div className="text-white w-full flex flex-row justify-center items-center gap-2 py-6">
        <Filter
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "All"}
        />
        <Filter
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <Filter
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "nextjs"}
        />
        <Filter
          onClick={handleTagChange}
          name="Nodejs" 
          isSelected={tag === "nodejs"} 
        />
        <Filter
          onClick={handleTagChange}
          name="Reactjs" 
          isSelected={tag === "reactjs"}
        />
        <Filter
          onClick={handleTagChange}
          name="Projetos Empresa"
          isSelected={tag === "company_projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-4 md:gap-12">
        {ProjectData.map((data, index) => (
        <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
        <CardProject
          imgUrl={data.imgUrl}
          title={data.title}
          description={data.description}
          gitUrl={data.gitUrl}
          previewUrl={data.previewUrl}
            />
        </motion.li>
      ))}
      </ul>
    </section>
  )
}
