"use client";

import { useEffect } from "react";

import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <Loader />
      <Hero />
      <About />
    </div>
  );
}
