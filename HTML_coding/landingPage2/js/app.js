let tl = gsap.timeline();

tl
.from('.header', {
    opacity: 0,
    duration: 0.7,
    y: -40
})
.from('.top__right-img', {
    opacity: 0,
    x: 60,
    duration: 1
})
.from('.top__left-gaming', {
    y: -60,
    opacity: 0,
    duration: 1
}, "-=1")
.from('.top__left-link', {
    y: 60,
    opacity: 0,
    duration: 1
}, "-=1")
.from('.top__left-title', {
    x: -60,
    opacity: 0,
    duration: 1
}, "-=1")
.from('.top__left-descr', {
    x: -100,
    opacity: 0,
    duration: 1
}, "-=1")
.from('.box-top', {
    x: -50,
    width: 200,
    opacity: 0,
    duration: 0.5
})
.from('.box-bottom', {
    x: 50,
    width: 200,
    opacity: 0,
    duration: 0.5
}, "-=0.5")
.from('.top__cross', {
    x: -100,
    y: 50,
    opacity: 0,
    duration: 0.5
}, "-=0.5")
.from('.top__cross2', {
    x: -100,
    y: -50,
    opacity: 0,
    duration: 0.5
}, "-=0.5")