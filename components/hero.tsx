"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context-provider'

export default function hero() {
  
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      id="Início"
      className="text-center  scroll-mt-[100rem]"
      ref={ref}
    >
      <div className="flex  items-center justify-center">
        <motion.div className="relative"
          initial={{  opacity: 0, scale:0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration:0.2,
          }}
        >
          <Image src={"/image/foto.jpg"} 
            width="192"
            height="192"
            quality="95"
            alt='foto'
            priority={true}
            className="h-48 w-48 rounded-full
              object-cover shadow-xl
              border-[0.35rem] border-white"
          />
          <motion.span className="absolute bottom-4 right-4  text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </motion.div>
        <div>

        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá, eu sou Jailson Mendonça.</span> Eu sou{" "}
        <span className="font-bold"> desenvolvedor full-stack</span>. Eu gosto de
        construir <span className="italic">sites & apps</span>. Meu focu é em{" "}
        <span className="underline">React (Next.js) e Node.js</span>.
      </motion.h1>


      <motion.div className="flex flex-col sm:flex-row
        items-center justify-center gap-2 px-4 
        texr-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:0.1,
        }}
      >
        <Link href="#contact"
          className="group bg-gray-900 text-white px-7
          py-3 flex items-center gap-2 rounded-full
          autline-none focus:scale-110 hover:scale-110 
          hover:bg-gray-950 active:scale-105 transition"
        >
          Contate-me <BsArrowRight
            className="opacity-70 group-hover:translate-x-1 transition"
          />
        </Link>

        <a className="group bg-white px-7
          py-3 flex items-center gap-2 rounded-full
          autline-none focus:scale-110 hover:scale-110 
          active:scale-105 transition cursor-pointer
          border border-black/10 hove:bg-gray-950"
          href="/image/curriculo.pdf" download
        >
          Baixar curriculo <HiDownload
            className="opacity-70 group-hover:translate-y-1 transition"
          />
        </a>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        <a className="bg-white  p-4 flex text-gray-700
          items-center gap-2 rounded-full
          focus:scale-110 hover:scale-[1.15] hover:text-gray-950
          active:scale-[1.15] transition cursor-pointer
          border border-black/10 "
          href="https://www.linkedin.com/in/jailson-mendon%C3%A7a-a4099025a/"
          target="_blank"
        >
          <BsLinkedin/>
        </a>

        <a className="bg-white p-4 flex text-gray-700
          items-center gap-2 text-[1.15rem] rounded-full
          focus:scale-110 hover:scale-[1.15] hover:text-gray-950
          active:scale-[1.15] transition cursor-pointer
          border border-black/10"
          href="https://github.com/JailsonMendonca" target="_blank"
        >
          <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  )
};