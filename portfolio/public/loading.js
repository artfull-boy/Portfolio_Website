t1 = gsap.timeline({
    repeat: -1,
    repeatDelay:1,
    yoyo:true
})

t1.fromTo("#Vector", {
    drawSVG: "0% 0%" //svg animations start from left "0% 0%" to right "100% 100%", here we want to start from right
}, {
    drawSVG: "0% 100%", //progress from 0% to 100%
    duration:1,
    ease:"power4.inOut"
})
t1.fromTo("#Vector_2", {
    drawSVG: "100% 100%" //svg animations start from left "0% 0%" to right "100% 100%", here we want to start from right
}, {
    drawSVG: "0% 100%", //progress from 0% to 100%
    duration:1,
    ease:"power4.inOut"
})
t1.fromTo("#dot", {
    drawSVG: "100% 100%" //svg animations start from left "0% 0%" to right "100% 100%", here we want to start from right
}, {
    drawSVG: "0% 100%", //progress from 0% to 100%
    duration:1,
    ease:"power4.inOut"
})
