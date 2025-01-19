const menu = document.querySelector("#main i");
const close = document.querySelector("#full i")

let tl = gsap.timeline()
tl.to("#full",{
    right: 0,
    duration: 0.8,
})

tl.from("#full h4" , {
    x: 150,
    duration:0.6,
    stagger: 0.3,
    opacity: 1,
})

tl.from("#full i" , {
    opacity: 0,
    
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

close.addEventListener("click",()=>{
    tl.reverse()
})