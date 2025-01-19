let TimeLine = gsap.timeline();

function Page1Animation() {
  TimeLine.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.3,
    delay: 0.8,
    stagger: 0.2,
  });

  TimeLine.from("#center-part1 h1", {
    x: -300,
    duration: 0.3,
    opacity: 0,
  });

  TimeLine.from("#center-part1 p", {
    x: -300,
    duration: 0.3,
    opacity: 0,
  });

  TimeLine.from("#center-part1 button", {
    duration: 0.7,
    opacity: 0,
  });

  TimeLine.from(
    "#center-part2 img",
    {
      opacity: 0,
      duration: 0.6,
    },
    "-=0.5"
  );

  TimeLine.from("#section1bottom img", {
    y: 30,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
  });
}

let TimeLine2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

function Page2Animation() {
  TimeLine2.from("#services h3", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  TimeLine2.from(
    ".card.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.3,
    },
    "hello"
  );

  TimeLine2.from(
    ".card.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.3,
    },
    "hello"
  );

  TimeLine2.from(
    ".card.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.3,
    },
    "Bye"
  );

  TimeLine2.from(
    ".card.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.3,
    },
    "Bye"
  );
}

Page1Animation();
Page2Animation();
