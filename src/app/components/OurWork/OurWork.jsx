"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
  const container = useRef(null);

  useGSAP(() => {

    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });


  }, { scope: container });

  return (
    <main ref={container}>

      <section className="panel relative flex h-screen items-center overflow-hidden">
        <Image
          src="/images/section-1.webp"
          alt="Producción audiovisual"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#111828]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111828]/95 via-[#111828]/60 to-transparent" />

        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D54BF7]/20 blur-[130px]" />

        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32">

          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm font-medium tracking-[0.3em] text-[#FF69EA]">
              01
            </span>

            <div className="h-px w-16 bg-[#FF69EA]/60" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#CBD5E1]">
              Producción & contenido
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Producción
            <br />

            <span className="bg-gradient-to-r from-[#FF69EA] via-[#D54BF7] to-[#903BB5] bg-clip-text text-transparent">
              Audiovisual
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#CBD5E1] md:text-lg">
            Creamos contenido audiovisual que convierte ideas en experiencias
            visuales capaces de conectar con tu audiencia y potenciar tu marca.
          </p>

          <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">

            {[
              "Cobertura de eventos",
              "Fotografía profesional",
              "Grabación de contenido",
              "Reels",
              "Videos promocionales",
              "Videos interactivos para redes sociales",
            ].map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-3 border-b border-white/10 pb-3"
              >
                <span className="text-xs font-medium text-[#FF69EA]">
                  0{index + 1}
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>


      <section className="panel relative flex h-screen items-center overflow-hidden">
        <Image
          src="/images/section-2.webp"
          alt="Manejo de redes sociales"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#111828]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111828]/95 via-[#111828]/60 to-transparent" />

        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D54BF7]/20 blur-[130px]" />

        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32">

          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm font-medium tracking-[0.3em] text-[#FF69EA]">
              02
            </span>

            <div className="h-px w-16 bg-[#FF69EA]/60" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#CBD5E1]">
              Estrategia digital
            </span>
          </div>

          
          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Manejo de
            <br />

            <span className="bg-gradient-to-r from-[#FF69EA] via-[#D54BF7] to-[#903BB5] bg-clip-text text-transparent">
              redes sociales
            </span>
          </h2>

          
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#CBD5E1] md:text-lg">
            Construimos y gestionamos la presencia digital de tu marca con
            contenido estratégico que conecta con tu audiencia y genera
            crecimiento.
          </p>

          
          <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">

            <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-xs font-medium text-[#FF69EA]">
                01
              </span>

              <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                Gestión de redes sociales
              </span>
            </div>

            <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-xs font-medium text-[#FF69EA]">
                02
              </span>

              <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                Creación de contenido
              </span>
            </div>

            <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-xs font-medium text-[#FF69EA]">
                03
              </span>

              <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                Diseño de publicaciones
              </span>
            </div>

            <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-xs font-medium text-[#FF69EA]">
                04
              </span>

              <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                Reels y contenido audiovisual
              </span>
            </div>

            <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-xs font-medium text-[#FF69EA]">
                05
              </span>

              <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                Estrategia de contenido
              </span>
            </div>

            <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-xs font-medium text-[#FF69EA]">
                06
              </span>

              <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                Análisis y optimización
              </span>
            </div>

          </div>

        </div>
      </section>

      <section className="panel relative flex h-screen items-center overflow-hidden">
        <Image
          src="/images/section-3.webp"
          alt="Marketing estratégico"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        
        <div className="absolute inset-0 bg-[#111828]/75" />

        
        <div className="absolute inset-0 bg-gradient-to-l from-[#111828]/95 via-[#111828]/60 to-transparent" />

        
        <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#F78639]/20 blur-[130px]" />

        
        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32">

          <div className="ml-auto max-w-5xl">

            
            <div className="mb-6 flex items-center justify-end gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#CBD5E1]">
                Estrategia & crecimiento
              </span>

              <div className="h-px w-16 bg-[#F78639]/70" />

              <span className="text-sm font-medium tracking-[0.3em] text-[#F78639]">
                03
              </span>
            </div>

            
            <h2 className="text-right text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Marketing
              <br />

              <span className="bg-gradient-to-l from-[#FCB454] via-[#F79748] to-[#EF5120] bg-clip-text text-transparent">
                Estratégico
              </span>
            </h2>

            
            <p className="ml-auto mt-7 max-w-2xl text-right text-base leading-relaxed text-[#CBD5E1] md:text-lg">
              Diseñamos estrategias enfocadas en convertir oportunidades en
              resultados, alineando cada acción de marketing con los objetivos
              comerciales de tu negocio.
            </p>

            
            <div className="ml-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">

              <div className="group flex items-center justify-end gap-3 border-b border-white/10 pb-3">
                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Plan de marketing mensual
                </span>

                <span className="text-xs font-medium text-[#F78639]">
                  01
                </span>
              </div>

              <div className="group flex items-center justify-end gap-3 border-b border-white/10 pb-3">
                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Estrategias de crecimiento
                </span>

                <span className="text-xs font-medium text-[#F78639]">
                  02
                </span>
              </div>

              <div className="group flex items-center justify-end gap-3 border-b border-white/10 pb-3">
                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Embudos de ventas
                </span>

                <span className="text-xs font-medium text-[#F78639]">
                  03
                </span>
              </div>

              <div className="group flex items-center justify-end gap-3 border-b border-white/10 pb-3">
                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Asesoría comercial
                </span>

                <span className="text-xs font-medium text-[#F78639]">
                  04
                </span>
              </div>

              <div className="group flex items-center justify-end gap-3 border-b border-white/10 pb-3">
                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Optimización de ventas
                </span>

                <span className="text-xs font-medium text-[#F78639]">
                  05
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="panel relative flex h-screen items-center overflow-hidden">
        <Image
          src="/images/section-4.webp"
          alt="Diseño gráfico"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#111828]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111828]/95 via-[#111828]/60 to-transparent" />

        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#903BB5]/25 blur-[130px]" />

        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32">

          <div className="max-w-5xl">

            
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-medium tracking-[0.3em] text-[#FF69EA]">
                04
              </span>

              <div className="h-px w-16 bg-[#FF69EA]/60" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#CBD5E1]">
                Identidad visual
              </span>
            </div>

            
            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Diseño
              <br />

              <span className="bg-gradient-to-r from-[#FF69EA] via-[#D54BF7] to-[#903BB5] bg-clip-text text-transparent">
                Gráfico
              </span>
            </h2>

            
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#CBD5E1] md:text-lg">
              Creamos piezas visuales que transmiten la esencia de tu marca,
              fortalecen su identidad y generan una imagen profesional y
              memorable.
            </p>

            
            <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FF69EA]">
                  01
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Logotipos
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FF69EA]">
                  02
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Tarjetas de presentación
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FF69EA]">
                  03
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Flyers
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FF69EA]">
                  04
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Banners
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FF69EA]">
                  05
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Branding
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="panel relative flex h-screen items-center overflow-hidden">
        <Image
          src="/images/section-5.webp"
          alt="Desarrollo web"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        
        <div className="absolute inset-0 bg-[#111828]/75" />

        {/* Gradiente lateral */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111828]/95 via-[#111828]/60 to-transparent" />

        
        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#F78639]/20 blur-[130px]" />

        
        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32">

          <div className="max-w-5xl">

            
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-medium tracking-[0.3em] text-[#FCB454]">
                05
              </span>

              <div className="h-px w-16 bg-[#FCB454]/60" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#CBD5E1]">
                Tecnología & presencia digital
              </span>
            </div>

            
            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Desarrollo
              <br />

              <span className="bg-gradient-to-r from-[#FCB454] via-[#F79748] to-[#EF5120] bg-clip-text text-transparent">
                Web
              </span>
            </h2>

            
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#CBD5E1] md:text-lg">
              Diseñamos y desarrollamos sitios web modernos, rápidos y
              funcionales que convierten visitantes en clientes y ayudan a
              posicionar tu negocio en el mundo digital.
            </p>

            
            <div className="mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FCB454]">
                  01
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Landing pages
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FCB454]">
                  02
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Páginas corporativas
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FCB454]">
                  03
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Tiendas online
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FCB454]">
                  04
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Optimización SEO
                </span>
              </div>

              <div className="group flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-xs font-medium text-[#FCB454]">
                  05
                </span>

                <span className="text-sm text-[#E2E8F0] transition-colors duration-300 group-hover:text-white md:text-base">
                  Formularios de contacto
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}