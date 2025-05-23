var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets) {
    // console.log(dets)
    crsr.style.left = dets.x - 10 +"px"
    crsr.style.top = dets.y - 10 +"px"
})

var crsrBlur = document.querySelector("#cursorBlur")
document.addEventListener("mousemove", function(dets) {
    crsrBlur.style.left = dets.x - 200 +"px"
    crsrBlur.style.top = dets.y - 200 +"px"
    
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11",
        scrub: 1.2
    }
    
    // delay: 1
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -75%",
        scrub: 2
    }
}) 

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1
        crsr.style.border= "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
});

gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller:"body",
        // markers:true
        start:"top 60%",
        end: "top 58%",
        scrub: 2
    }
})

// gsap.from(".card", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     // stagger: 0.4,
//     scrollerTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         start: "top 70%",
//         end: "top 55%",
//         scrub: 2
//     }
// })

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", { /* Not working */
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger: {
        trigger:"#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

