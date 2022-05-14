const hud = document.getElementById('hud'); 
const add = document.getElementById('add');
const use = document.getElementById('use');

let days = 0;

add.onclick = () => {
    days++;
    hud.innerText = days;
}

use.onclick = () => {
    days = days - 1;
    hud.innerText = days;
    localStorage.setItem("available days", days);
}



