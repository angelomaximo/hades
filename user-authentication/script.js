// 




/* AUTHENTICATION */

// make a variable with the password string.
const password = "admin123";
// make a boolean variable assigned true.
let keepGoing = true;
// initialize a variable attempt to count how many times the user can try the password.
let attempt = 0;
// make a while loop. And it's condition is while the boolean variable is true, the code keep running.
while (keepGoing == true) {
    // catch the user password input.
    let inpPass = prompt("Password:");
    // increment the attempt. Each time the loop iterates it will increment. And eventually, it will become 3.
    attempt += 1;
    // if user input password is equal to password.
    if (inpPass == password) {
        // print "Right password!"
        alert("Right password!");
        // assign the boolean variable to false, stoping the loop.
        keepGoing = false;
    } 
    // else, increment a the attempt variable to become false when the user cannot evaluate the right password.
    else if (attempt >= 3) {
        alert("Wrong password!");
        keepGoing = false;
    }
}