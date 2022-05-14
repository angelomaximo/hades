const hud = document.getElementById('hud'); 
const add = document.getElementById('add');
const use = document.getElementById('use');
const avail = document.getElementById('avail');

let days = 0;


// Store and display day number in the HUD.
let storeDay = () => { 
    localStorage.setItem("available days", days);
    // Pick and display the available days object, which is the variable days
    hud.innerText = localStorage.getItem("available days");
}

add.onclick = () => {
    days++;
    storeDay();
}

use.onclick = () => {
    days = days - 1;
    storeDay();
}

// Display available days. Also, avail means available.
avail.innerText = localStorage.getItem("available days");