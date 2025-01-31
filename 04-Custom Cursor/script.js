const cursor = document.querySelector('#cursor');
const screen = document.querySelector('#main');
const image = document.querySelector('#image');

screen.addEventListener('mousemove', (dets)=>{
    gsap.to(cursor, {
        x: dets.x ,
        y: dets.y ,
        duration: 1,
        ease: "back.out(1.7)",

    })
})

image.addEventListener('mouseenter', (dets) => {
    cursor.innerText = 'Beautiful'
    cursor.style.backgroundColor = '#ffc0cbc2'
    gsap.to(cursor, {
        scale: 2, 
        duration: 0.2,
    })
})

image.addEventListener('mouseleave', (dets) => {
     cursor.innerText = ''
       cursor.style.backgroundColor = '#fff'
    gsap.to(cursor, {
        scale: 1, 
        duration: 0.2,
    })
})