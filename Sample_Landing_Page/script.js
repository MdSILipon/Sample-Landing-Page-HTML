
// cursor movement home image

document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerWidth - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateX(${y}px)`

    })
}

gsap.from('.logo', {opacity: 0, duration: 1, delay: 2, y:10})
gsap.from('.navlist a', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2})


gsap.from('.h-text h1', {opacity: 0, duration: 1, delay: 1.6, y:30})
gsap.from('.h-text p', {opacity: 0, duration: 1, delay: 1.8, y:30})
gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:30})
gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:30})