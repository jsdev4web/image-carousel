

export function slideLights(){
    console.log("This is working")

    let lightDiv = document.createElement("div");
    lightDiv.setAttribute("id", "lightDiv");
    
    let containTwo = document.querySelector("#containerTwo");
    containTwo.appendChild(lightDiv)


    let buttonLeft = document.createElement("button")
    buttonLeft.setAttribute("id", "buttonLeft");
    buttonLeft.setAttribute("class", "lightBtns");
    lightDiv.appendChild(buttonLeft);

    let buttonMid = document.createElement("button");
    buttonMid.setAttribute("id", "buttonMid");
    buttonMid.setAttribute("class", "lightBtns");
    lightDiv.appendChild(buttonMid);

    let buttonRight = document.createElement("button")
    buttonRight.setAttribute("id", "buttonRight");
    buttonRight.setAttribute("class", "lightBtns");
    lightDiv.appendChild(buttonRight);

    let slideDiv = document.querySelector("#slideDiv");
    console.log(slideDiv)

    let left = document.querySelector("leftImg");
    let right = document.querySelector("rightImg");
    let mid = document.querySelector("midImg");

    
}


export function initLights(){
    console.log("this green lights at start")

    let getLightbtn = document.querySelector("#buttonMid")
    getLightbtn.style.backgroundColor = "green"
}