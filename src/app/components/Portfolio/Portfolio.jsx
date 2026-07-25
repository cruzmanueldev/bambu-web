"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Producción audiovisual",
    category: "Contenido & Producción",
    description:
      "Creamos piezas audiovisuales que convierten ideas en historias capaces de conectar con tu audiencia.",
    image: "/images/section-1.webp",
    tags: ["Video", "Fotografía", "Reels"],
  },
  {
    number: "02",
    title: "Identidad de marca",
    category: "Branding",
    description:
      "Construimos identidades visuales que hacen que tu negocio sea reconocible, memorable y diferente.",
    image: "/images/section-2.webp",
    tags: ["Branding", "Diseño", "Identidad"],
  },
  {
    number: "03",
    title: "Redes sociales",
    category: "Social Media",
    description:
      "Diseñamos contenido pensado para generar conversación, comunidad y crecimiento alrededor de tu marca.",
    image: "/images/section-3.webp",
    tags: ["Instagram", "TikTok", "Contenido"],
  },
  {
    number: "04",
    title: "Campañas digitales",
    category: "Marketing Digital",
    description:
      "Convertimos objetivos de negocio en campañas digitales con conceptos creativos y estrategia.",
    image: "/images/section-4.webp",
    tags: ["Ads", "Campañas", "Estrategia"],
  },
  {
    number: "05",
    title: "Diseño & creatividad",
    category: "Diseño Gráfico",
    description:
      "Diseñamos piezas visuales que transmiten el valor de tu negocio desde el primer vistazo.",
    image: "/images/section-5.webp",
    tags: ["Diseño", "Creatividad", "Digital"],
  },
  {
    number: "06",
    title: "Estrategia digital",
    category: "Estrategia",
    description:
      "Analizamos tu negocio y diseñamos estrategias personalizadas para llevarlo al siguiente nivel.",
    image: "/images/section-1.webp",
    tags: ["Estrategia", "Marketing", "Growth"],
  },
];

export default function Portfolio() {
  useGSAP(() => {

    gsap.from(".portfolio-hero-line", {
      y: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.12,
      ease: "power4.out",
    });

    gsap.from(".portfolio-hero-description", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(".portfolio-scroll", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.8,
      ease: "power3.out",
    });

    gsap.to(".portfolio-orb-purple", {
      x: 100,
      y: -80,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".portfolio-orb-orange", {
      x: -100,
      y: 80,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.utils.toArray(".portfolio-project").forEach((project) => {
      const image = project.querySelector(".portfolio-image");
      const content = project.querySelector(".portfolio-content");
      const number = project.querySelector(".portfolio-number");

      gsap.from(image, {
        y: 100,
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(content, {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: project,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(number, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(".portfolio-cta", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".portfolio-cta",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <main className="relative overflow-hidden bg-[#111828] text-white">

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">

        <div
          className="
            portfolio-orb-purple
            absolute
            -left-48
            top-1/4
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#903BB5]/20
            blur-[150px]
          "
        />

        <div
          className="
            portfolio-orb-orange
            absolute
            -right-48
            bottom-96
            h-[50px]
            w-[550px]
            rounded-full
            bg-[#F78639]/15
            blur-[150px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="mb-8 flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-[#CBD5E1]">
            <span className="h-px w-12 bg-[#FF69EA]" />
            Nuestro portafolio
          </div>

          <h1 className="max-w-6xl overflow-hidden text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-[9rem]">

            <span className="portfolio-hero-line block">
              Ideas que
            </span>

            <span className="portfolio-hero-line block">
              se convierten
            </span>

            <span
              className="
                portfolio-hero-line
                block
                bg-gradient-to-r
                from-[#FF69EA]
                via-[#D54BF7]
                to-[#903BB5]
                bg-clip-text
                text-transparent
              "
            >
              en impacto.
            </span>

          </h1>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <p className="portfolio-hero-description max-w-xl text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
              Una selección de proyectos donde estrategia, creatividad y
              contenido trabajan juntos para hacer crecer marcas.
            </p>

            <button
              className=" cursor-pointer portfolio-scroll flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/40"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <ArrowDown
                size={18}
                className="animate-bounce text-[#FF69EA]"
              />
              Explorar
            </button>

          </div>
        </div>
      </section>


      <section id="about" className="relative mx-auto max-w-7xl px-6 pb-40">

        <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-6">
          <div>

            <h2 className="mt-3 text-4xl font-bold md:text-6xl">
              Lo que hacemos.
            </h2>
          </div>

          <span className="hidden text-sm text-white/40 md:block">
            {projects.length.toString().padStart(2, "0")} proyectos
          </span>
        </div>


        <div className="space-y-40">

          {projects.map((project, index) => {

            const reverse = index % 2 !== 0;

            return (
              <article
                key={project.number}
                className={`
                  portfolio-project
                  grid
                  items-center
                  gap-12
                  lg:grid-cols-12
                  lg:gap-20
                `}
              >

                <div
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    lg:col-span-7
                    ${reverse ? "lg:order-2" : ""}
                  `}
                >

                  <div className="aspect-[4/3] overflow-hidden bg-[#1a2235]">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        portfolio-image
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                        rounded-4xl
                      "
                    />

                  </div>

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#111828]/80
                      via-transparent
                      to-transparent
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-90
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-6
                      right-6
                      flex
                      h-14
                      w-14
                      translate-y-4
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#111828]
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      cursor-pointer
                    "
                  >
                    <ArrowUpRight size={22} />
                  </div>

                </div>

                <div
                  className={`
                    portfolio-content
                    lg:col-span-5
                    ${reverse ? "lg:order-1" : ""}
                  `}
                >

                  <span className="text-sm uppercase tracking-[0.25em] text-[#FF69EA]">
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-md text-lg leading-relaxed text-[#94A3B8]">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-4
                          py-2
                          text-xs
                          uppercase
                          tracking-wider
                          text-[#CBD5E1]
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <button
                    type="button"
                    className="
                      group
                      mt-10
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      uppercase
                      tracking-widest
                      text-white
                      cursor-pointer
                    "
                  >

                    Ver proyecto

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    />

                  </button>

                </div>

              </article>
            );
          })}

        </div>
      </section>

    </main>
  );
}