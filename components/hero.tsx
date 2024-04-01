"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const hero = () => {
  return (
    <section
      id="home"
      className="mb-28 text-center sm:mb-0 scroll-mt-[100rem]"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá, Eu sou Jailson Mendonça.</span> Eu sou{" "}
        <span className="font-bold"> desenvolvedor full-stack</span> com{" "}
        <span className="font-bold">1 ano</span> de experiência. Eu gosto de
        construir <span className="italic">sites & apps</span>. Meu focu é em{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  )
}

export default hero;