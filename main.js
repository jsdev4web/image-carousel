
import { arrowControl } from "./arrowHandler.js"
import { slideOne } from "./slides/slide1.js"
import { slideLights, initLights } from "./slideLights.js"

export function init(){
    console.log("application start")
    //grab main container
    let mainDiv = document.querySelector("#container")

    //create left arrow
    let leftArrowDiv = document.createElement("div")
    leftArrowDiv.setAttribute("id", "leftArrow")
    let arrowL = document.createElement("img");
    arrowL.setAttribute("id", "leftImg")
    leftArrowDiv.appendChild(arrowL)
    arrowL.src = "images/leftArr.jpg"
    arrowL.style.height = "30px"
    arrowL.style.width = "30px"
    

    //create right arrow
    let rightArrowDiv = document.createElement("div")
    rightArrowDiv.setAttribute("id", "rightArrow")
    let arrowR = document.createElement("img");
    arrowR.setAttribute("id", "rightImg")
    rightArrowDiv.appendChild(arrowR);
    arrowR.src = "images/rightArr.jpg"
    arrowR.style.height = "30px";
    arrowR.style.width = "30px";

    //create image mid image div
    let slideDiv = document.createElement("div");
    slideDiv.setAttribute("id", "slideDiv")
    mainDiv.appendChild(slideDiv)
    //add right and left arrows
    slideDiv.before(leftArrowDiv)
    slideDiv.after(rightArrowDiv)


    
    arrowControl()
    
    slideDiv = slideOne()
    
}

init()

slideLights()

initLights()