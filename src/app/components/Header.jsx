"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Inicio",
    },
    {
      href: "/our-work",
      label: "Soluciones",
    },
    {
      href: "/benefits",
      label: "Beneficios",
    },
    {
      href: "/portfolio",
      label: "Portafolio",
    },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`
        fixed top-3 left-1/2 z-50
        w-[95%] md:w-[80%] lg:w-[70%]
        -translate-x-1/2
        rounded-2xl
        border border-white/10
        bg-[#111828]/85
        backdrop-blur-xl
        shadow-[0_4px_15px_rgba(255,255,255,0.08)]
        transition-all duration-500
        ${open ? "bg-[#111828]/95" : ""}
      `}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        <Link
          href="/"
          onClick={closeMenu}
          className="group relative flex h-10 w-[110px] items-center"
        >
          <Image
            src="/images/logo-1.png"
            alt="Up Studio"
            width={80}
            height={30}
            priority
            className="
              absolute inset-0
              h-auto w-full
              opacity-100
              transition-opacity duration-500
              group-hover:opacity-0
            "
          />

          <Image
            src="/images/logo-2.png"
            alt="Up Studio"
            width={80}
            height={30}
            priority
            className="
              absolute inset-0
              h-auto w-full
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />
        </Link>

        <nav className="hidden lg:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative
                  uppercase
                  text-md
                  font-medium
                  transition-colors
                  duration-300

                  ${isActive
                    ? "text-[#FF69EA]"
                    : "text-white hover:text-[#FF69EA]"
                  }

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:bg-gradient-to-r
                  after:from-[#FF69EA]
                  after:to-[#903BB5]
                  after:transition-all
                  after:duration-300

                  ${isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="
              group
              flex
              items-center
              gap-0
              rounded-full
              bg-[#D54BF7]
              px-6
              py-2
              text-md
              font-medium
              uppercase
              text-white
              transition-all
              duration-300
              ease-out
              hover:scale-105
            "
          >
            Contacto
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-[#D54BF7]
            transition-all
            duration-300
            hover:border-[#FF69EA]/40
            hover:bg-[#FF69EA]/10
            cursor-pointer
            lg:hidden
          "
        >
          <Menu
            size={22}
            className={`
              absolute
              transition-all
              duration-300
              ${open
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
              }
            `}
          />

          <X
            size={22}
            className={`
              absolute
              transition-all
              duration-300
              ${open
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
              }
            `}
          />
        </button>
      </div>

      <div
        className={`
          grid
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              mx-3
              mb-3
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >

            <div
              className="
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-[#FF69EA]/60
                to-transparent
              "
            />

            <nav className="flex flex-col p-3 gap-1">

              {links.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: open
                        ? `${index * 60}ms`
                        : "0ms",
                    }}
                    className={`
                      group
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      uppercase
                      font-medium
                      transition-all
                      duration-300
                      ${open
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                      }

                      ${isActive
                        ? "bg-[#FF69EA]/10 text-[#FF69EA]"
                        : "text-[#CBD5E1] hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">

                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300

                          ${isActive
                            ? "bg-[#FF69EA] shadow-[0_0_10px_#FF69EA]"
                            : "bg-white/20 group-hover:bg-[#FF69EA]"
                          }
                        `}
                      />

                      {link.label}
                    </div>

                    {
                      !isActive && (
                        <ArrowUpRight
                          size={17}
                          className={`
                            transition-all
                            duration-300
    
                            ${isActive
                              ? "translate-x-0 text-[#FF69EA] opacity-100"
                              : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }
                          `}
                        />
                      )
                    }

                  </Link>
                );
              })}

              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="
                  group
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-4xl
                  bg-[#D54BF7]
                  px-4
                  py-3
                  uppercase
                  font-medium
                  text-white
                  shadow-[0_0_25px_rgba(213,75,247,0.15)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_30px_rgba(255,105,234,0.25)]
                "
              >
                Pide asesoría
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}