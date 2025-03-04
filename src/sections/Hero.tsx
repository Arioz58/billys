import React from "react";
import Image from "next/image";
import grid from "@/assets/grid.png";
import burgerHero from "@/assets/burger_hero.png";
import billysLogo from "@/assets/billys-logo.png";

export default function Hero() {
  return (
    <section className="pt-24 flex flex-col justify-center sm:flex-row-reverse" id="hero">
      <div className="flex justify-between items-center">
        <div className="overflow-hidden flex flex-col justify-center mx-auto ">
          <div className="relative flex flex-col justify-center">
            <h1 className="font-black absolute text-5xl ml-6 drop-shadow-lg text-[#2C2C2C] z-10">
              Smash <span className="font-medium">is</span> <br />{" "}
              <span className="italic font-bold">Everything !</span>
            </h1>
            <Image
              src={grid}
              alt="grid"
              height={380}
              width={380}
              className="opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_60%)] scale-130"
            />
          </div>
          <div className="flex gap-2 px-4 relative -top-20">
            <a href="" className="uber-btn">
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
            </a>
            <a href="" className="call-btn">
              Appelez nous
            </a>
          </div>
        </div>
      </div>
      <div className="">
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
