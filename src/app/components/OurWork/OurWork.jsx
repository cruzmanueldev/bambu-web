"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      <section
        className="panel relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/section-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="px-8 md:px-32">
          <div className="relative z-10 flex h-full items-center justify-center">
            <h2 className="text-7xl md:text-8xl font-bold text-white">Producción Audiovisual</h2>
          </div>
          <div>
            <ul className="relative mt-8 !text-white text-2xl md:text-3xl space-y-3">
              <li>
                •	Cobertura de eventos
              </li>
              <li>
                •	Fotografía profesional
              </li>
              <li>
                •	Grabación de contenido
              </li>
              <li>
                •	Reels
              </li>
              <li>
                •	Videos promocionales
              </li>
              <li>
                •	Videos interactivos para redes sociales
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="panel relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/section-2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="px-8 md:px-32">
          <div className="relative z-10 flex h-full items-center justify-center">
            <h2 className="text-7xl text-center md:text-8xl font-bold text-white">Manejo de redes sociales</h2>
          </div>
          <div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 text-white text-2xl md:text-3xl">
              <div className="p-4 text-center">
                •	Cobertura de eventos
              </div>
              <div className="p-4 text-center">
                •	Fotografía profesional
              </div>
              <div className="p-4 text-center">
                •	Grabación de contenido
              </div>
              <div className="p-4 text-center">
                •	Videos interactivos para redes sociales
              </div>
              <div className="p-4 text-center">
                •	Videos promocionales
              </div>
              <div className="p-4 text-center">
                •	Reels
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="panel relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/section-3.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="px-8 md:px-32 w-full">
          <div className="relative z-10 flex h-full items-center justify-center lg:justify-end">
            <h2 className="text-7xl md:text-8xl font-bold text-white">Marketing Estratégico</h2>
          </div>
          <div>
            <ul className="relative lg:text-end mt-8 !text-white text-2xl md:text-3xl space-y-3">
              <li>
                •	Plan de marketing mensual
              </li>
              <li>
                •	Estrategias de crecimiento
              </li>
              <li>
                •	Embudos de ventas
              </li>
              <li>
                •	Asesoría comercial
              </li>
              <li>
                •	Optimización de ventas
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="panel relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/section-4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="px-8 md:px-32">
          <div className="relative z-10 flex h-full items-center justify-center">
            <h2 className="text-7xl md:text-8xl font-bold text-white">Diseño Gráfico</h2>
          </div>
          <div>
            <ul className="relative mt-8 !text-white text-2xl md:text-3xl space-y-3">
              <li>
                • Logotipos
              </li>
              <li>
                •	Tarjetas de presentación
              </li>
              <li>
                •	Flyers
              </li>
              <li>
                •	Banners
              </li>
              <li>
                •	Branding
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="panel relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/section-5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="px-8 md:px-32">
          <div className="relative z-10 flex h-full items-center justify-center">
            <h2 className="text-7xl md:text-8xl font-bold text-white">Desarrollo Web</h2>
          </div>
          <div>
            <ul className="relative mt-8 !text-white text-2xl md:text-3xl space-y-3">
              <li>
                •	Landing pages
              </li>
              <li>
                •	Páginas corporativas
              </li>
              <li>
                •	Tiendas online
              </li>
              <li>
                •	Optimización SEO
              </li>
              <li>
                •	Formularios de contacto
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}