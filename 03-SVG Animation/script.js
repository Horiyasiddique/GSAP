// **************** SVG [Scalable Vector Graphics] **************************
let path = `M 10 100 Q 250 100 490 100`;
let finalPath = `M 10 100 Q 250 100 490 100`;
const string = document.querySelector("#string");
string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", (dets) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.inOut(1,0.2)",
  });
});
