"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MousePointerClick } from "lucide-react";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Loader
    tl.to(".loader", {
      opacity: 0,
      duration: 0.6,
      delay: 1.5,
      ease: "power2.inOut",
    })
      .set(".loader", {
        display: "none",
      })

      .from(".hero-orb-purple", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=0.2")

      .from(".hero-orb-orange", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=1.2")

      .from(".hero-word", {
        y: 100,
        opacity: 0,
        rotateX: -80,
        duration: 1,
        stagger: 0.06,
        ease: "power4.out",
      }, "-=0.8")

      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")

      .from(".hero-scroll", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, "-=0.3");

    gsap.to(".hero-orb-purple", {
      x: 100,
      y: -60,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-orb-orange", {
      x: -80,
      y: 70,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[#111828]">

      <div
        className="
          hero-orb-purple
          absolute
          -left-32
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#903BB5]/30
          blur-[120px]
        "
      />

      <div
        className="
          hero-orb-orange
          absolute
          -right-32
          bottom-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#F78639]/20
          blur-[90px]
        "
      />

      <div className="relative z-10 max-w-6xl px-6 text-center">

        <h1 className="hero-title text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">

          <span className="hero-word inline-block">
            Te ayudamos
          </span>{" "}

          <span className="hero-word inline-block">
            a impulsar
          </span>{" "}

          <span
            className="
              hero-word
              inline-block
              bg-gradient-to-r
              from-[#FF69EA]
              via-[#D54BF7]
              to-[#903BB5]
              bg-clip-text
              text-transparent
            "
          >
            el crecimiento
          </span>{" "}

          <span className="hero-word inline-block">
            de tu negocio
          </span>
        </h1>

        <p className="hero-subtitle mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
          Marketing, contenido y estrategia para llevar tu marca
          al siguiente nivel.
        </p>

        <div className="hero-scroll mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group flex flex-col items-center gap-3 text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            <MousePointerClick
              size={18}
              strokeWidth={1.5}
              className="text-[#FF69EA] animate-bounce transition-transform duration-500 ease-out group-hover:translate-y-1"
            />

            <span>
              Descubre más
            </span>

            <div
              className="h-12 w-px bg-gradient-to-b from-[#FF69EA] to-transparent"
            />
          </button>
        </div>
      </div>
    </section>
  );
}