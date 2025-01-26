// ************* SCROLL TRIGGER ****************
gsap.from('.page1 .box', {
    duration: 0.7,
    delay: 1,
    rotate: 360
})
gsap.from('.page2 .box', {
    scale: 0,
    duration: 0.7,
   scrollTrigger: {
    trigger: '.page2 .box',
    scroller: 'body',
    markers: true,
    start: 'top 67%',
    scrub: 2, //scrub is used for smoothness and completely depend on scrolling
   }
   
})
gsap.from('.page3 .box', {
    x: 400,
    duration: 0.7,
    delay: 1,
    scrollTrigger: {
        trigger: '.page3 .box',
        scroller: 'body',
        markers: true,
        start: 'top 67%'
       }
   
})