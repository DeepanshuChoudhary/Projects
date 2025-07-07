// let boxes = document.querySelectorAll(".box");

// const restart = document.getElementById("restart");

// let turn = true;

// winnerPattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// boxes.forEach((box)=> {
//     box.addEventListener("click", ()=> {
//         if(true) {
//             box.innerText = "X";
//             box.style.backgroundColor = "#7fffd4";
//             true = false;
//         }
//         else {
//             box.innerText = "0";
//             box.style.backgroundColor = "#ff83f1";
//             true = true;
//         }
//         box.disable = true;
//         checkWinner();
//     });
// });

// const checkWinner = () => {
//     for(let pattern of winnerPattern) {
//         let posval1 = boxes[pattern[0]].innerText;
//         let posval2 = boxes[pattern[1]].innerText;
//         let posval3 = boxes[pattern[2]].innerText;

//         if(posval1 !="" && posval2 !="" && posval3 !="") {
//             if(posval1 === posval2 && posval2 === posval3) {
//                 document.getElementById("msg").innerHTML = `Congratulation! <span style="color: red;">${posval1}</span> Player Wins`;

//                 boxes.forEach((box)=> {
//                     box.disabled = true;
//                     if(box.innerHTML === "") {
//                         box.style.backgroundColor = "#51057d";
//                     }
//                 });

//                 return;
//             }
//         }
//     };
// };

// restart.addEventListener("click", ()=> {
//     boxes.forEach((box) => {
//         box.innerText = "";
//         box.disabled = false;
//         box.style.backgroundColor = "#9a05f0";
//     });

//     true = true;

//     document.getElementById("msg").innerHTML = "Let's Play the Game";
// });

let boxes = document.querySelectorAll(".box");
const restart = document.getElementById("restart");
let turnX = true; // true -> X's turn, false -> O's turn

const winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if (box.innerText !== "") return; // don't allow overwrite

        if (turnX) {
            box.innerText = "X";
            box.style.backgroundColor = "#7fffd4";
        } else {
            box.innerText = "O";
            box.style.backgroundColor = "#ff83f1";
        }

        box.disabled = true;
        checkWinner();
        turnX = !turnX;
    });
});

const checkWinner = () => {
    for(let pattern of winnerPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3) {
                document.getElementById("msg").innerHTML = `🎉 Congratulation! <span style="color: red;">${pos1}</span> wins!`;

                boxes.forEach((box)=> {
                    box.disabled = true;
                    if(box.innerText === "") {
                        box.style.backgroundColor = "#51057d";
                    }
                });

                return;
            }
        }
    }
};

restart.addEventListener("click", ()=> {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#b943fd";
    });

    turnX = true;
    document.getElementById("msg").innerHTML = "Let's Play the Game";
});
