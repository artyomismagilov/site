window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
})

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop2', `${window.scrollY}`)
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})