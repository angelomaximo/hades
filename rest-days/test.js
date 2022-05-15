/*
--> VARIABLES GLOSSARY
    avail = available

*/

/*
    Arithmetic after the user enter the input enter amount
    + || - avail days.

*/

const hud = document.getElementById('hud'); 
const add = document.getElementById('add');
const use = document.getElementById('use');
const avail = document.getElementById('avail');

let days = 0;


// Store and display day number in the HUD.
let storeDay = () => { 
    localStorage.setItem("available days", days);

    // display the amount of days the user want to.
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

// Display available days.
avail.innerText = localStorage.getItem("available days");

