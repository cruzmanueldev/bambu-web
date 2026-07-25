"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }, ".about");

    return () => ctx.revert();
  });

  return (
    <section
      id="about"
      className="
        about
        relative
        min-h-screen
        overflow-hidden
        bg-[#111828]
        px-6
        py-24
        md:px-12
        lg:px-24
        xl:px-36
      "
    >
      <div
        className="
          absolute
          -left-40
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#903BB5]/15
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#F78639]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-center">

        <div className="about-label mb-8 flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#FF69EA]">
            <span className="text-sm font-medium uppercase tracking-[0.3em]">
              Nosotros
            </span>
          </div>
        </div>

        <h2
          className="
            about-title
            max-w-6xl
            text-4xl
            font-bold
            leading-[1.05]
            tracking-tight
            text-white
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          No solo hacemos
          <br />

          <span
            className="
              bg-gradient-to-r
              from-[#FF69EA]
              via-[#D54BF7]
              to-[#903BB5]
              bg-clip-text
              text-transparent
            "
          >
            marketing.
          </span>

          <br />

          Hacemos que tu marca
          <br />

          <span className="text-[#CBD5E1]">
            avance.
          </span>
        </h2>

        {/* Descripción */}
        <div className="about-description mt-10 flex max-w-3xl flex-col gap-6">
          <p className="text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
            Somos una agencia de marketing que ayuda a pequeñas, medianas y
            grandes empresas a{" "}
            <span className="font-semibold text-white">
              vender más, conectar mejor y crecer.
            </span>
          </p>

          <p className="text-base leading-relaxed text-white/50 md:text-lg">
            Combinamos contenido profesional, estrategia, creatividad y
            presencia digital para construir marcas que no pasan
            desapercibidas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div
            className="
              about-card
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#FF69EA]/30
              hover:bg-white/[0.05]
            "
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-[#FF69EA]">
                01
              </span>

              <Plus
                size={18}
                className="
                  text-white/30
                  transition-transform
                  duration-500
                  group-hover:rotate-90
                  group-hover:text-[#FF69EA]
                "
              />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Estrategia
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Analizamos tu negocio y construimos estrategias enfocadas en
              objetivos reales.
            </p>
          </div>

          <div
            className="
              about-card
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#D54BF7]/30
              hover:bg-white/[0.05]
            "
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-[#D54BF7]">
                02
              </span>

              <Plus
                size={18}
                className="
                  text-white/30
                  transition-transform
                  duration-500
                  group-hover:rotate-90
                  group-hover:text-[#D54BF7]
                "
              />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Contenido
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Creamos contenido visual que comunica, conecta y convierte
              visitantes en clientes.
            </p>
          </div>

          <div
            className="
              about-card
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#F79748]/30
              hover:bg-white/[0.05]
            "
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-[#F79748]">
                03
              </span>

              <Plus
                size={18}
                className="
                  text-white/30
                  transition-transform
                  duration-500
                  group-hover:rotate-90
                  group-hover:text-[#F79748]
                "
              />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Crecimiento
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Medimos resultados, optimizamos y buscamos nuevas oportunidades
              para seguir creciendo.
            </p>
          </div>

        </div>

        <div className="about-actions mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/our-work"
            className="
              group
              inline-flex
              min-w-[240px]
              items-center
              justify-center
              gap-0
              rounded-full
              bg-[#D54BF7]
              px-7
              py-3
              text-base
              font-medium
              text-white
              transition-all
              duration-300
              hover:shadow-[0_0_35px_rgba(213,75,247,0.25)]
            "
          >
            <span>Conoce nuestras soluciones</span>

            <ArrowRight
              size={19}
              strokeWidth={2}
              className="
                ml-0
                w-0
                overflow-hidden
                opacity-0
                transition-all
                duration-300
                group-hover:ml-2
                group-hover:w-5
                group-hover:opacity-100
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
}