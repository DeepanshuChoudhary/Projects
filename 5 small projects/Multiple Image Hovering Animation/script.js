// let elem1 = document.querySelector('.elem1');

// let elem1Image = document.querySelector('.elem1 img');

// elem1.addEventListener("mousemove", (dets) => {
//     elem1Image.style.left = dets.x + "px";
//     elem1Image.style.top = dets.y + "px";
// })

// elem1.addEventListener("mouseenter", () => {
//     elem1Image.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave", () => {
//     elem1Image.style.opacity = 0;
// })

let elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {

    val.addEventListener('mouseenter', () => {
        // console.log("mouse enter");
        // val.style.backgroundColor = 'red';

        val.childNodes[3].style.opacity = 1;
    })

    val.addEventListener('mouseleave', () => {
        // console.log("mouse leave");
        // val.style.backgroundColor = 'transparent';

        val.childNodes[3].style.opacity = 0;
    })

    val.addEventListener("mousemove", (dets) => {
        val.childNodes[3].style.left = dets.x + 'px';
        val.childNodes[3].style.top = dets.y + 'px';
    })

})