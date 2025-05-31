let b = document.querySelector('#bulb');

let btn = document.querySelector('button');

let flag = 0

btn.addEventListener("click", () => {
    if(flag == 0) {
        b.style.backgroundColor = 'yellow';
        console.log("button clicked = ON")
        flag = 1;
        if(btn.textContent === 'ON') {
            btn.textContent = 'OFF';
        }
    }
    else {
        b.style.backgroundColor = 'transparent';
        flag = 0;
        console.log("button clicked = OFF");
        if(btn.textContent === 'OFF') {
            btn.textContent = "ON";
        }
    }
})