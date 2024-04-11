"use client"
import { motion, useTransform } from "framer-motion"
import { useScroll } from "framer-motion"
import React, { useRef } from "react"
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface PropsCardProjects {
  imgUrl:string,
  title?: string,
  description?: string,
  gitUrl?: string,
  previewUrl?: string,
}

export default function CardProject(
  {
    imgUrl,
    title,
    description,
    gitUrl,
    previewUrl 
  }: PropsCardProjects) {
  const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
    target: ref,
    offset:["0 1", "1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" border border-black/10 rounded-xl"
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center 
          top-0 left-0 w-full h-full bg-[#181818]
          bg-opacity-0 hidden group-hover:flex
          group-hover:bg-opacity-80 transition-all duration-500 "
        >
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full 
              border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                cursor-pointer group-hover/link:text-white"
              />
            </Link>
          )}

          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full 
              border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                cursor-pointer group-hover/link:text-white"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="text-black rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-800 pb-2">{description}</p>
      </div>

    </motion.div>
  )
}
