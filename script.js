function signUp() {

    //Get all elements needed and store it in variable
    var info = document.getElementById("info");
    var infoN = document.getElementById("info-n");
    var infoP = document.getElementById("info-p");
    var nick = document.getElementById("nickname");
    var password = document.getElementById("password");
    
    //Debugging
    console.log(nick.value + " " + password.value);

    if (nick.value==="") {
        infoN.innerHTML = "{Syntax Error}";
        infoP.innerHTML = "{Sntax Error}"
        return
    }
if (password.value==="") {
        infoN.innerHTML = "{Syntax Error}";
        infoP.innerHTML = "{Sntax Error}"
        return
}
    //Will change value of paragraphs in .html file
    info.innerHTML = "Your account info:";
    infoN.innerHTML = "Nickname: " + nick.value;
    infoP.innerHTML = "Password: " + password.value;
}
console.log("Test")
var bodyElement = document.getElementById("parent");
var copyright = document.createElement("p");
copyright.innerHTML = "Copyright 2021";
bodyElement.appendChild(copyright);
console.log(copyright)
el = document.querySelector("p");
el.getAttribute("class");
console.log(el.getAttribute("class"))