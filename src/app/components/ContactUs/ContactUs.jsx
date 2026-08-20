"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function OurWork() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const inputsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          formRef.current,
          {
            x: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
    });

    return () => ctx.revert();
  }, []);

  console.log(inputsRef.current);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-16 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div ref={titleRef}>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Es hora de cambiar el rumbo de tu empresa.
          </h1>

          <p className="mt-6 text-lg text-black leading-relaxed">
            Dale una nueva dirección hacia el crecimiento. Cuéntanos sobre tu
            negocio y uno de nuestros especialistas se pondrá en contacto contigo
            para brindarte una asesoría personalizada.
          </p>
        </div>

        {/* Formulario */}
        <div
          ref={formRef}
          className="bg-gray-800 rounded-3xl shadow-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Solicita una asesoría gratuita
          </h2>

          <form className="space-y-5">

            <input
              ref={(el) => (inputsRef.current[0] = el)}
              type="text"
              id="name"
              placeholder="Nombre"
              className="!bg-white w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-blue-100"
            />

            <input
              ref={(el) => (inputsRef.current[1] = el)}
              type="email"
              placeholder="Correo electrónico"
              className="!bg-white w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-blue-100"
            />

            <input
              ref={(el) => (inputsRef.current[2] = el)}
              type="tel"
              placeholder="Teléfono"
              className="!bg-white w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-blue-100"
            />

            <input
              ref={(el) => (inputsRef.current[3] = el)}
              type="text"
              placeholder="Ciudad"
              className="!bg-white w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-blue-100"
            />

            <textarea
              ref={(el) => (inputsRef.current[4] = el)}
              rows={5}
              placeholder="Cuéntanos sobre tu empresa o proyecto..."
              className="!bg-white w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-500 focus:ring-blue-100"
            />

            <button
              ref={buttonRef}
              type="submit"
              className="w-full bg-[#FC6400] transition-colors text-white font-semibold py-3 rounded-xl cursor-pointer"
            >
              Solicitar asesoría
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}