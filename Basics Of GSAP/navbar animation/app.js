//EXAMPLE NAVBAR ANIMATION
let tl = gsap.timeline();
tl.from("#name", {
  y: -20,
  opacity: 0,
  duration: 0.6,
  delay: 1,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  stagger: 0.4,
  duration: 1,
});

tl.from("#profession", {
  y: 30,
  scale: 0.4,
  opacity: 0,
  duration: 0.6,
});
