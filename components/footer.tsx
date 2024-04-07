"use client"
import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { motion } from "framer-motion"

const Footer = () => {


  const currentYear = new Date().getFullYear();
  return (
    <>
      <motion.footer className="bg-white rounded-lg mt-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div
          className="w-full  px-2 py-4"
        >
          <div className="flex mt-4 justify-center">
            <ul className="flex items-center justify-center text-gray-700 space-x-7 xl:justify-end">
              <li>
                <a
                  href="https://www.linkedin.com/in/jailson-mendon%C3%A7a-a4099025a/"
                  target="_blank"
                >
                  <BsLinkedin className="w-4 h-y" />
                </a>
              </li>
              <li>
                <a href="https://github.com/JailsonMendonca" target="_blank">
                  <FaGithubSquare className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-200 mx-auto " />
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-700 text-center">
              © {currentYear}{" "}
              <a
                href="jailsonmendonca0707@gmail.com"
                className="hover:underline"
              >
                Jailson Mendonça™
              </a>
              . All Rights Reserved
            </span>
          </div>
        </div>
      </motion.footer>
    </>
  )
}

export default Footer