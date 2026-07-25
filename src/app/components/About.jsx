"use client";

import { useGSAP } from "@gsap/react";
import { Button } from "antd";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.from(".about", {
      y: 150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
      },
    });
  });

  return (
    <section id="about" className="about p-4 lg:px-36 min-h-screen flex flex-col gap-14 items-center justify-center bg-gray-900">
      <h2 className="text-3xl lg:text-5xl text-white font-bold text-center">
        Somos una agencia de marketing que ayuda a pequeñas, medianas y grandes empresas  a vender más mediante contenido profesional, estrategias de marketing y presencia digital.
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <Link href="/our-work" className="group flex-1 min-w-[280px]">
          <button className="w-full bg-[#D54BF7] flex justify-center items-center text-center text-[#FFFFFF] px-6 py-2 rounded-full text-lg font-medium cursor-pointer whitespace-nowrap">
            <div>¿Qué hacemos?</div>
            <ArrowRight
              size={20}
              strokeWidth={2}
              className="w-0 group-hover:ml-2 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100"
            />
          </button>
        </Link>

        <Link href="/contact-us" className="group flex-1 min-w-[280px] ">
          <button className="w-full bg-[#D54BF7] flex justify-center items-center text-center text-[#FFFFFF] px-6 py-2 rounded-full text-lg font-medium cursor-pointer whitespace-nowrap">
            <div>Pide asesoría gratuita</div>
            <ArrowRight
              size={20}
              strokeWidth={2}
              className="w-0 group-hover:ml-2 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100"
            />
          </button>
        </Link>
      </div>
    </section>
  );
}