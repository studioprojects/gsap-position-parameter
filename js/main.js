
let animation = gsap.timeline();
animation
    .to(".red", {duration: 2, x: 1150})
    .to(".green", {duration: 3, x: 1150}, "+=1") // positive relative position
    .to(".blue", {duration: 2, x: 1150}, "-=1") // negative relative position
    .to(".yellow", {duration: 1, x: 1150}, "<") // start at the beginnning of the previous tween
    .to(".purple", {duration: 1, x: 1150}, "2") // absolute time i.e. start at 2 seconds
    .to(".orange", {duration: 1, x: 1150}, "<0.5") // start 0.5 seconds after previous (purple)