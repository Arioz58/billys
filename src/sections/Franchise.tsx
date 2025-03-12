"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Franchise() {
  return (
    <section
      className="text-[#2B2B2B] m-5 flex flex-col justify-center items-center text-center"
      id="franchise"
    >
      <div className="max-w-[360px] flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl font-semibold">
          Vous souhaitez devenir franchisé ?
        </h1>
        <p className="border text-lg border-[#2B2B2B] p-2 mx-2 rounded-3xl">
          Faites nous confiance et rejoignez l’aventure !
        </p>
        <p>
          vous pouvez remplir un formulaire via le bouton suivant afin que nous
          puissions traiter votre demande
        </p>
        <motion.a
          animate={{
            backgroundPositionX: "110%",
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          href=""
          className="bg-[linear-gradient(to_right,#FEDA00,#FF5DA9,#9F45FF,#FEDA00,#FF5DA9,#9F45FF)] [background-size:200%] text-transparent bg-clip-text font-medium border-[2px] border-black/50 p-2 rounded-2xl shadow-lg"
        >
          Devenir franchisé !
        </motion.a>
      </div>
    </section>
  );
}
