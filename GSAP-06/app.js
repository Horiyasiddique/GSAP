let h1 = document.querySelector("h1");
let h1Text = h1.textContent;
let splittedText = h1Text.split("");
let halfText = splittedText.length / 2;
let clutter = "";
function breakTheText() {
  splittedText.forEach(function (elem, idx) {
    if (halfText > idx) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter
}

breakTheText();

gsap.from("h1 .a", {
  y: 90,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.16,
  opacity: 0,
});

gsap.from("h1 .b", {
    y: 90,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.16,
    opacity: 0,
  });