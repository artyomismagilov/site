window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop2', `${this.scrollY}`)
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})