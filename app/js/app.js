let tl = gsap.timeline();
tl.fromTo(
  "#jumbo h2",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 0.6,
    duration: 1.0,
  }
).fromTo(
  ".heroImg",
  {
    height: 0,
  },
  {
    height: "auto",
    duration: 1.8,
    ease: "power2.inOut",
  },
  ">-1"
);
