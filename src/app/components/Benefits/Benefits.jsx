"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Más visibilidad.",
  "Más clientes.",
  "Más ventas.",
  "Imagen profesional.",
  "Estrategias personalizadas.",
  "Asesoría y acompañamiento constante.",
];

const process = [
  {
    number: "01",
    title: "Analizamos tu negocio.",
    description:
      "Conocemos tu marca, tus objetivos, tu público y el mercado en el que compites.",
  },
  {
    number: "02",
    title: "Diseñamos una estrategia.",
    description:
      "Convertimos tus objetivos en una estrategia clara, personalizada y enfocada en resultados.",
  },
  {
    number: "03",
    title: "Creamos el contenido.",
    description:
      "Desarrollamos contenido visual y creativo pensado para conectar con las personas correctas.",
  },
  {
    number: "04",
    title: "Publicamos y gestionamos.",
    description:
      "Nos encargamos de llevar tu estrategia a los canales donde está tu audiencia.",
  },
  {
    number: "05",
    title: "Medimos resultados.",
    description:
      "Analizamos los datos para entender qué funciona y qué oportunidades podemos aprovechar.",
  },
  {
    number: "06",
    title: "Optimizamos para seguir creciendo.",
    description:
      "Ajustamos y mejoramos continuamente la estrategia para conseguir mejores resultados.",
  },
];

export default function Benefits() {
  useGSAP(() => {

    gsap.from(".benefits-hero-line", {
      y: 100,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power4.out",
    });

    gsap.from(".benefits-hero-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(".benefits-scroll", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      delay: 0.8,
    });

    gsap.to(".benefits-orb-purple", {
      x: 100,
      y: -80,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".benefits-orb-orange", {
      x: -100,
      y: 70,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const benefitCards = gsap.utils.toArray(".benefit-card");

    benefitCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.from(".process-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".process-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".process-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-list",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    const processItems = gsap.utils.toArray(".process-item");

    processItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.from(".benefits-cta", {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".benefits-cta",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <main className="overflow-hidden bg-[#111828] text-white">

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">

        <div
          className="
            benefits-orb-purple
            absolute
            -left-48
            top-1/4
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#903BB5]/20
            blur-[150px]
          "
        />

        <div
          className="
            benefits-orb-orange
            absolute
            -right-48
            bottom-60
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#F78639]/15
            blur-[150px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="mb-8 flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-[#CBD5E1]">
            <span className="h-px w-12 bg-[#FF69EA]" />
            ¿Por qué elegirnos?
          </div>

          <h1 className="max-w-6xl text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-[8rem]">

            <span className="benefits-hero-line block">
              Tu negocio
            </span>

            <span className="benefits-hero-line block">
              puede llegar
            </span>

            <span
              className="
                benefits-hero-line
                block
                bg-gradient-to-r
                from-[#FF69EA]
                via-[#D54BF7]
                to-[#903BB5]
                bg-clip-text
                text-transparent
              "
            >
              mucho más lejos.
            </span>

          </h1>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <p className="benefits-hero-description max-w-2xl text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
              No se trata solamente de publicar contenido. Se trata de
              construir una estrategia que haga que tu marca sea vista,
              recordada y elegida.
            </p>

            <div className="benefits-scroll flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/40">
              <ArrowDown
                size={18}
                className="animate-bounce text-[#FF69EA]"
              />
              Descubre más
            </div>

          </div>

        </div>
      </section>

      <section className="relative px-6 py-32 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-4xl">

            <span className="text-sm uppercase tracking-[0.3em] text-[#FF69EA]">
              El resultado
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
              En grande,
              <br />
              <span className="text-[#CBD5E1]">
                tu negocio tendrá
              </span>
            </h2>

          </div>


          <div className="benefits-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="
                  benefit-card
                  group
                  relative
                  min-h-[260px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D54BF7]/40
                  hover:bg-white/[0.05]
                "
              >

                <span className="absolute right-7 top-7 text-sm text-white/20 transition-colors duration-500 group-hover:text-[#FF69EA]/70">
                  0{index + 1}
                </span>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D54BF7]/10
                    text-[#FF69EA]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-[#D54BF7]
                    group-hover:text-white
                  "
                >
                  <Check size={22} />
                </div>
                
                <h3 className="mt-16 max-w-sm text-3xl font-semibold leading-tight md:text-4xl">
                  {benefit}
                </h3>

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-[#FF69EA]
                    to-[#903BB5]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="process-section relative px-6 py-32 md:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="process-title mb-24 grid gap-10 lg:grid-cols-2">

            <div>

              <span className="text-sm uppercase tracking-[0.3em] text-[#F78639]">
                Nuestro proceso
              </span>

              <h2 className="mt-5 text-5xl font-bold leading-[1] md:text-7xl">
                ¿Cómo lograremos
                <br />
                <span
                  className="
                    bg-gradient-to-r
                    from-[#F79748]
                    to-[#EF5120]
                    bg-clip-text
                    text-transparent
                  "
                >
                  posicionar tu empresa?
                </span>
              </h2>

            </div>

            <div className="flex items-end">

              <p className="max-w-xl text-lg leading-relaxed text-[#94A3B8]">
                Trabajamos cada etapa de manera estratégica para que tu
                presencia digital no sea producto de la improvisación,
                sino de un proceso pensado para crecer.
              </p>

            </div>

          </div>


          <div className="process-list relative">

            <div className="absolute left-[27px] top-8 bottom-8 hidden w-px bg-white/10 md:block" />

            <div
              className="
                process-line
                absolute
                left-[27px]
                top-8
                hidden
                h-[calc(100%-4rem)]
                w-px
                bg-gradient-to-b
                from-[#FF69EA]
                via-[#D54BF7]
                to-[#F78639]
                md:block
              "
            />

            <div className="space-y-6">

              {process.map((step) => (
                <div
                  key={step.number}
                  className="
                    process-item
                    group
                    relative
                    grid
                    gap-8
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-8
                    transition-all
                    duration-500
                    hover:border-white/20
                    hover:bg-white/[0.04]
                    md:grid-cols-[56px_180px_1fr]
                    md:items-center
                    md:p-10
                  "
                >
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D54BF7]/40
                      bg-[#111828]
                      text-sm
                      font-semibold
                      text-[#FF69EA]
                      transition-all
                      duration-500
                      group-hover:border-[#FF69EA]
                      group-hover:bg-[#D54BF7]
                      group-hover:text-white
                    "
                  >
                    {step.number}
                  </div>

                  <span className="text-sm uppercase tracking-[0.2em] text-[#64748B]">
                    Paso {step.number}
                  </span>

                  <div>

                    <h3 className="text-2xl font-semibold md:text-3xl" >
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#94A3B8]">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}