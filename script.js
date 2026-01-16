alert("JS działa ✅");
// Reveal on scroll (pop, ale classy)
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.15 });

els.forEach(el => io.observe(el));

// Tiny sparkle drift
const sparks = document.querySelectorAll(".spark");
sparks.forEach((s, i) => {
  const dx = (Math.random() * 14 + 6) * (i % 2 ? -1 : 1);
  const dy = (Math.random() * 12 + 6) * (i % 3 ? 1 : -1);
  s.animate([
    { transform: "translate(0,0) scale(1)" },
    { transform: `translate(${dx}px, ${dy}px) scale(1.15)` },
    { transform: "translate(0,0) scale(1)" }
  ], {
    duration: 2600 + i * 300,
    iterations: Infinity,
    easing: "ease-in-out"
  });
});
