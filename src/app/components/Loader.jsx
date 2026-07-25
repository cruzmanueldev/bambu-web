"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <Image
        src="/images/logo-1.png"
        alt="Logo"
        width={220}
        height={220}
        priority
        className="animate-pulseLogo"
      />
    </div>
  );
}