"use client";
import React, { useState, useRef } from "react";
import CardProject from "./cardProject";
import { ProjectData } from "@/lib/data"
import { motion, useInView } from "framer-motion";
import Filter from "./filter";


export default function SectionProjectsCard() {

  const [tag, setTag] = useState("Todos");
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
    <>

      <div className="text-white w-full flex-wrap  
        px-8  flex flex-row justify-center
        items-center gap-2 py-6"
      >
        <Filter
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <Filter
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <Filter
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "Nextjs"}
        />
        <Filter
          onClick={handleTagChange}
          name="Nodejs" 
          isSelected={tag === "nodejs"} 
        />
        <Filter
          onClick={handleTagChange}
          name="Reactjs" 
          isSelected={tag === "Reactjs"}
        />
        <Filter
          onClick={handleTagChange}
          name="Projetos Empresa"
          isSelected={tag === "Projetos Empresa"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 px-8 gap-4 md:gap-12">
        {filteredProjects.map((data, index) => (
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
    </>
  )
}
