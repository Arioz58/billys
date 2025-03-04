import React from "react";
import Image from "next/image";
import BillysLogo from "@/assets/billys-logo.png";

export default function Header() {
  return (
    <header className="z-50 backdrop-blur-md fixed w-full">
      <div className="flex items-center justify-between max-w-[400px] sm:max-w-[440px] p-1 mx-auto">
        <div className="inline-flex justify-center items-center relative before:rounded-3xl before:content-[''] before:top-1 before:bottom-0 before:w-4/5 before:h-4/5 before:blur-lg before:bg-[linear-gradient(to_right,#9C49FF,#F569A6,#FCD73E)] before:absolute">
          <Image
            src={BillysLogo}
            alt="Billy's Logo"
            height={80}
            width={80}
            className="relative"
          />
        </div>
        <a href="" className="menu-btn">
          Nos menus
          <span className="inline-flex">
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
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </a>
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
      </div>
    </header>
  );
}
