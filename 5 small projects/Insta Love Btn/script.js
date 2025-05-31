var con = document.querySelector("#container");
var loveIcon = document.querySelector("i");

con.addEventListener("dblclick", () => {
    console.log("double click, hello");
    loveIcon.style.transform = 'translate(-50%,-50%) scale(1)';
    loveIcon.style.opacity = '0.8';

    setTimeout(function() {
        loveIcon.style.opacity = 0;
    }, 1000)

    setTimeout(function() {
        loveIcon.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 2000)
})