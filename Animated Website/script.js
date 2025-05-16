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

