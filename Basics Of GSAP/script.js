//GSAP  (GreenSock Animation Platform) is used for animations
//There are 3 methods of GSAP but we will discuss only 2 gsap.to and gsap.from

// 1. gsap.to() mean initial to final
gsap.to("#box1", {
  x: 500,
  y: 200,
  duration: 1.2,
  delay: 0.8,
  rotate: 360,
  backgroundColor: "orange",
});

// 2. gsap.from() means final to initial
gsap.from("#box2", {
  y: -500,
  x: 200,
  scale: 1,
  duration: 1.3,
  delay: 1,
  borderRadius: "100%",
  repeat: 2,
  yoyo: true,
});

//Text animation appearing one by one
gsap.from("h1", {
  opacity: 0,
  duration: 1.2,
  delay: 1,
  stagger: 0.4, //target h1 tags one by one
  y: 100,
});

//************************************* timeline************************************
//used for manage animations if we wanna trigger them one by one
let tl = gsap.timeline();

/** +++++++++++++++++++++++ Summary :  +++++++++++++++++++++++
 * 1. GSAP used for animate elements
 2. ScrollTrigger used for animate elements on basis of scrolling
 properties of scrollTrigger
 - trigger: 'select element you wants to trigger',
 -scroller: " body most of the times",
 -start : "animation start point",
 -end: "animation end point",
 -markers : " Boolean" -helps us to make perfect animtion  we can remove it later,
 -scrub: "Boolean or any no. between 1-5" -to make animation back and forth,
 -pin : pin the page while animating elements
 ** note: while using pin property make sure trigger must be parent element
 */
