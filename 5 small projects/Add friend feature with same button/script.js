let stranger = document.querySelector('h5');

let btnFriend = document.getElementById('add');

let check = 0;

btnFriend.addEventListener("click", () => {
    if(check == 0) {
        stranger.innerHTML = "Friend";
        stranger.style.color = "green";
        btnFriend.textContent = "Remove";
        btnFriend.style.backgroundColor = "#dadada";
        btnFriend.style.color = "#111";
        check = 1;
    }
    else {
        stranger.innerHTML = "Stranger";
        stranger.style.color = "red";
        btnFriend.textContent = "Add Friend";
        btnFriend.style.backgroundColor = "cadetblue"
        btnFriend.style.color = "#fff";
        check = 0;
    }
})

// let btnRemove = document.getElementById('remove');


// btnAdd.addEventListener("click", () => {
//     stranger.innerHTML = "Friend";
//     stranger.style.color = "green";
// })

// btnRemove.addEventListener("click", () => {
//     stranger.innerHTML = "Stranger";
//     stranger.style.color = "red";
// })