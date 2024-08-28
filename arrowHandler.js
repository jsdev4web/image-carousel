import { slideOne } from "./slides/slide1.js"
import { slideTwo } from "./slides/slide2.js"
import { slideThree } from "./slides/slide3.js"



export function arrowControl(){
    let mainDiv = document.querySelector("#container")
    console.log(mainDiv)

    let slideDiv = document.querySelector("#slideDiv")
    console.log(slideDiv)



    let arrSlides = [
        slideOne,
        slideTwo,
        slideThree
    ]


    

    let arrowLeft = document.querySelector("#leftImg")

    let num = 0;
    arrowLeft.addEventListener("click", (e) => {
        console.log(e.target)


        
        console.log(num)
        if (num === 2){
            num--
            slideDiv = arrSlides[num]()
            document.getElementById("buttonLeft").style.backgroundColor = "transparent"
            document.getElementById("buttonMid").style.backgroundColor = "transparent"
            document.getElementById("buttonRight").style.backgroundColor = "green"
        } else if(num === 1){
            num--
            slideDiv = arrSlides[num]()
            document.getElementById("buttonLeft").style.backgroundColor = "transparent"
            document.getElementById("buttonRight").style.backgroundColor = "transparent"
            document.getElementById("buttonMid").style.backgroundColor = "green"
        } else if(num === 0){
            num = 2
            slideDiv = arrSlides[num]()
            document.getElementById("buttonRight").style.backgroundColor = "transparent"
            document.getElementById("buttonMid").style.backgroundColor = "transparent"
            document.getElementById("buttonLeft").style.backgroundColor = "green"

        } 
    })


    let arrowRight = document.querySelector("#rightImg")

    arrowRight.addEventListener("click", (e) => {
        console.log(e.target)

        console.log(num)
        if(num === 0){
            num++
            slideDiv = arrSlides[num]()
            document.getElementById("buttonMid").style.backgroundColor = "transparent"
            document.getElementById("buttonLeft").style.backgroundColor = "transparent"
            document.getElementById("buttonRight").style.backgroundColor = "green"
        }else if(num === 1){
            num++
            slideDiv = arrSlides[num]()
            document.getElementById("buttonMid").style.backgroundColor = "transparent"
            document.getElementById("buttonRight").style.backgroundColor = "transparent"
            document.getElementById("buttonLeft").style.backgroundColor = "green"
        }else if(num === 2){
            num = 0
            slideDiv = arrSlides[num]()
            document.getElementById("buttonLeft").style.backgroundColor = "transparent"
            document.getElementById("buttonRight").style.backgroundColor = "transparent"
            document.getElementById("buttonMid").style.backgroundColor = "green"

        }

    })

    let rightclick = document.querySelector("#rightImg")
    setInterval(function () {rightclick.click();},5000);
    

}


