

export default function HomePage() {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".loader", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    })
      .set(".loader", {
        display: "none",
      })
      .from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
  });

  return (
    <main className="relative">

    </main>
  );
}