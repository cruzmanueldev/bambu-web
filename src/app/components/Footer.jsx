"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const links = [
    {
      title: "Navegación",
      items: [
        { label: "Inicio", href: "/" },
        { label: "Soluciones", href: "/our-work" },
        { label: "Beneficios", href: "/benefits" },
        { label: "Portafolio", href: "/portfolio" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">

      <div className="pointer-events-none absolute -left-40 top-40 h-[200px] w-[200px] rounded-full bg-[#903BB5]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#F78639]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* CTA */}
        <div className="border-b border-white/10 py-20 md:py-28">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#FF69EA]">
              ¿Listo para crecer?
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Hagamos que tu marca{" "}
              <span className="bg-gradient-to-r from-[#FF69EA] via-[#D54BF7] to-[#903BB5] bg-clip-text text-transparent">
                destaque.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
              Transformamos ideas en estrategias, contenido y experiencias
              digitales que ayudan a tu negocio a crecer.
            </p>

            <Link
              href="/contact-us"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#D54BF7]
                px-7
                py-3.5
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Hablemos de tu proyecto
            </Link>

          </div>

        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="group relative flex h-14 w-[130px] items-center"
            >
              <Image
                src="/images/logo-1.png"
                alt="Up Studio"
                width={130}
                height={45}
                className="absolute inset-0 h-auto w-full opacity-100 transition-opacity duration-500 group-hover:opacity-0"
              />

              <Image
                src="/images/logo-2.png"
                alt="Up Studio"
                width={130}
                height={45}
                className="absolute inset-0 h-auto w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#94A3B8]">
              Marketing, contenido y estrategia para marcas que quieren
              conectar, destacar y crecer.
            </p>

            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-[#CBD5E1]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#FF69EA]/40
                  hover:bg-[#FF69EA]/10
                  hover:text-[#FF69EA]
                "
              >
                <InstagramFilled  size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-[#CBD5E1]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#FF69EA]/40
                  hover:bg-[#FF69EA]/10
                  hover:text-[#FF69EA]
                "
              >
                <FacebookFilled  size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-[#CBD5E1]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#FF69EA]/40
                  hover:bg-[#FF69EA]/10
                  hover:text-[#FF69EA]
                "
              >
                <LinkedinFilled  size={18} />
              </a>

            </div>

          </div>

          <div>

            <ul className="space-y-4">
              {links[0].items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-0
                      text-sm
                      text-[#94A3B8]
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    {item.label}

                    <ArrowUpOutlined
                      size={14}
                      className="
                        w-0
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:ml-1.5
                        group-hover:w-3.5
                        group-hover:opacity-100
                        group-hover:text-[#FF69EA]
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <ul className="space-y-5">

              <li>
                <a
                  href="mailto:email@upstudio.com"
                  className="group flex items-start gap-3 text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white"
                >
                  <MailOutlined
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D54BF7]"
                  />

                  <span>
                    email@upstudio.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+51999999999"
                  className="group flex items-start gap-3 text-sm text-[#94A3B8] transition-colors duration-300 hover:text-white"
                >
                  <PhoneOutlined
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D54BF7]"
                  />

                  <span>
                    +51 999 999 999
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                <EnvironmentOutlined
                  size={18}
                  className="mt-0.5 shrink-0 text-[#D54BF7]"
                />

                <span>
                  Lima, Perú
                </span>
              </li>

            </ul>
          </div>

        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-[#64748B] md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Up Studio. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-[#CBD5E1]"
            >
              Política de privacidad
            </Link>

            <Link
              href="#"
              className="transition-colors duration-300 hover:text-[#CBD5E1]"
            >
              Términos y condiciones
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}