let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#img");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.76,
    ease: "back.out(1.7)",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  backgroundColor = "#ffffff8a";
  gsap.to(cursor, {
    scale: 2,
  });
});

imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  backgroundColor = "#fff"
  gsap.to(cursor, {
    scale: 1,
  });
});
