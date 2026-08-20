"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center bg-white text-black">
      <Image
        src="/images/logo-3.png"
        alt="Logo"
        width={220}
        height={220}
        priority
        className="animate-pulseLogo"
      />
    </div>
  );
}