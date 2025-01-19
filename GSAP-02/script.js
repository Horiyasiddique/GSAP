gsap.from("#page1 h1",{
    y: 100,
    duration: 2,
    delay:0.45,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
        trigger: "#page1 h1",
        scroller: "body",
        

    }
})

gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})