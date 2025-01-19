let path = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;
let body = document.querySelector("body");
let cursor = document.querySelector("#cursor");

let string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
   path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
   gsap.to("svg path",{
    attr:{d: path},
    duration: 0.2,
    ease: "power3.out"
   })
})

string.addEventListener("mouseleave",function(){
    path = `M 10 100 Q 500 100 990 100`
    gsap.to("svg path",{
        attr:{d: finalPath},
        duration: 1.6,
        ease: "elastic.out(1,0.2)"
    })
})

body.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})

