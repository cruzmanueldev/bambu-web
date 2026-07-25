'use client'

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header
      className="shadow-[0_4px_15px_rgba(255,255,255,0.08)] fixed top-3 left-1/2 z-30 w-[95%] md:w-[80%] lg:w-[70%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#111828]/80 backdrop-blur-md"
    >

      <div className="flex h-16 items-center justify-between px-4">

        <Link
          href="/"
          className="group relative flex h-14 w-[110px] items-center"
        >
          <Image
            src="/images/logo-1.png"
            alt="ORBITA"
            width={80}
            height={30}
            priority
            className="absolute inset-0 h-auto w-full opacity-100 transition-opacity duration-500 group-hover:opacity-0"
          />

          <Image
            src="/images/logo-2.png"
            alt="ORBITA"
            width={80}
            height={30}
            priority
            className="absolute inset-0 h-auto w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Inicio</Link>
          <Link href="/our-work" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Soluciones</Link>
          <Link href="/benefits" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Beneficios</Link>
          <Link href="/portfolio" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Portafolio</Link>
        </nav>

        <div className="hidden md:block hover:scale-105 transition-all duration-300 ease-out">
          <Link href="/contact-us"
            className="bg-[#D54BF7] text-[#FFFFFF] px-6 py-2 rounded-full text-lg font-medium">
            Contacto
          </Link>
        </div>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Menu color="#D54BF7" />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Inicio</Link>
          <Link href="/our-work" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Soluciones</Link>
          <Link href="/benefits" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Beneficios</Link>
          <Link href="/portfolio" className="text-lg font-medium text-[#FFFFFF] hover:text-[#FF69EA] transition-colors duration-300">Portafolio</Link>
          <Link
            href="/contact-us"
            className="bg-[#D54BF7] text-center text-[#FFFFFF] px-6 py-2 rounded-full text-lg font-medium"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}
