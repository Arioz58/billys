"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import grid from "@/assets/grid.png";
import burgerHero from "@/assets/burger_hero.png";
import billysLogo from "@/assets/billys-logo.png";
import square from "@/assets/square.png";
import zigzag from "@/assets/zigzag.png";
import triangle from "@/assets/triangle.png";

export default function Hero() {
  return (
    <section
      className="pt-24 flex flex-col justify-center sm:flex-row-reverse"
      id="hero"
    >
      <div className="flex justify-between items-center">
        <div className="overflow-hidden flex flex-col justify-center mx-auto ">
          <div className="relative flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-black absolute text-5xl ml-6 drop-shadow-lg text-[#2C2C2C] z-10"
            >
              <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              >
              Smash{" "}
              </motion.span>
              <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="font-medium"
              >
              is
              </motion.span>{" "}
              <br />
              <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="italic font-bold"
              >
              Everything !
              </motion.span>
            </motion.h1>
            <Image
              src={grid}
              alt="grid"
              height={380}
              width={380}
              className="opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_60%)] scale-130"
            />
          </div>
            <div className="flex gap-2 px-4 relative -top-20">
            <motion.a 
              href="" 
              className="uber-btn"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              Commander
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a 
              href="" 
              className="call-btn"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              Appelez nous
            </motion.a>
            </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-5">
        <Image
          src={square}
          alt="square"
          height={120}
          width={120}
          className="absolute z-20 left-40 scale-130 animate-[spin_15s_linear_infinite] drop-shadow-lg"
        />
        <Image
          src={zigzag}
          alt="zigzag"
          height={100}
          width={100}
          className="absolute z-20 left-0 transform translate-y-60 animate-[spin_15s_linear_infinite] drop-shadow-lg"
        />
        <Image
          src={triangle}
          alt="triangle"
          height={120}
          width={120}
          className="absolute z-20 right-0 transform translate-y-70 animate-[spin_15s_linear_infinite_reverse] drop-shadow-lg"
        />
        <div className="h-96 w-full bg-[#F8CD43] rounded-t-full flex flex-col justify-center items-center relative overflow-hidden">
          <Image
        src={grid}
        alt="grid"
        height={380}
        width={380}
        className="opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_50%)] scale-130"
          />
          <Image
        src={burgerHero}
        alt="burgerHero"
        height={380}
        width={380}
        className="absolute z-10"
          />
          <Image
        src={billysLogo}
        alt="billysLogo"
        height={80}
        width={80}
        className="absolute bottom-0 z-20"
          />
        </div>
      </div>
    </section>
  );
}
