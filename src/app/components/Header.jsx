'use client'

import Link from 'next/link'
import { useState } from 'react';

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 left-1/2 z-50 w-[95%] md:w-[80%] lg:w-[70%] -translate-x-1/2 rounded-2xl border border-gray-300 bg-white shadow-xl">
      
      <div className="flex h-16 items-center justify-between px-4">
        
        <Link href="/" className="text-xl font-bold text-gray-800">
          Bambu
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-lg font-medium">Posicionamiento Web</Link>
          <Link href="/" className="text-lg font-medium">Diseño</Link>
          <Link href="/" className="text-lg font-medium">Social Media</Link>
          <Link href="/" className="text-lg font-medium">+Soluciones</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/" className="bg-black text-white px-4 py-2 rounded-xl">
            Contacto
          </Link>
        </div>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/">Posicionamiento Web</Link>
          <Link href="/">Diseño</Link>
          <Link href="/">Social Media</Link>
          <Link href="/">+Soluciones</Link>
          <Link
            href="/"
            className="bg-black text-white px-4 py-2 rounded-xl text-center"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}
