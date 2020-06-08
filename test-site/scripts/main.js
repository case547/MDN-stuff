/* const myHeading = document.querySelector("h1");
//grabs reference to h1 and stores it in myHeading
myHeading.textContent = "Hello world!";
//set content value */

document.querySelector("h1").onclick = function () {
    alert("Ouch! Stop poking me!");
};


let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) { // If myName has no value or value is null
        setUserName(); // run setUserName() again from the start
    } else {
        localStorage.setItem("name", myName);
        // Create and store data item "name" = myName using localStorage API
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
    // If "name" data doesn't exist, setUserName() is run to create it
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};