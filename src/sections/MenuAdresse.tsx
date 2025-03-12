import Image from "next/image";
import React from "react";
import Burgers from "@/assets/burgers_img.png";
import Facade from "@/assets/facade.png";

export default function MenuAdresse() {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-between" id="menu">
      <div className="flex flex-col items-center justify-center overflow-hidden md:overflow-visible md:w-[130vw]">
        <Image
          src={Burgers}
          alt="Burgers"
          className="min-w-[130%] max-w-[500px] object-cover "
        />
        <a href="" className="menu-btn mt-5 mb-5">
          Découvrez nos menus !
        </a>
      </div>
      <div className="relative mt-5 w-[90%] max-w-[310px] mx-auto h-[400px] rounded-[75px] overflow-hidden border-4 border-black/10 shadow-xl mb-5">
        <Image
          src={Facade}
          alt="Facade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 flex flex-col items-center w-full bg-white/60 backdrop-blur-sm p-4">
          <p className="text-[#2D2D2D] text-xl font-normal">
            Nous sommes situé au :
          </p>
          <a href="" className="text-[#2D2D2D] text-xl font-normal">
            34 Rue Curial, 75019 Paris
          </a>
          <br />
          <p className="text-[#2D2D2D] text-xl font-normal">
            Nous sommes ouvert de :{" "}
          </p>
          <p className="text-[#2D2D2D] text-xl font-normal">11h30 a 1h00</p>
        </div>
      </div>
    </section>
  );
}
