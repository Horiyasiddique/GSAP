let h1 = document.querySelector("h1");
let text = h1.textContent;
let splittedText = text.split("");
let halfText = Math.floor(splittedText.length / 2);
let clutter = "";

// splitting text 
function breakTheText() {
  splittedText.forEach((elem, index) => {
    if (index < halfText) {
      clutter += `<span class = "a"> ${elem} </span>`;
    } else {
      clutter += `<span class = "b"> ${elem} </span>`;
    }
    h1.innerHTML = clutter;
  });
}

breakTheText();

// applying animations through GSAP
gsap.from("h1 .a", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
  stagger: -0.15,
});
