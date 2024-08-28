

export function slideOne(){
    let slideDiv = document.querySelector("#slideDiv");
    slideDiv.innerHTML = ""
    let chsOne = document.createElement("img")
    chsOne.setAttribute("id", "midImg")
    

    
    slideDiv.appendChild(chsOne)
    chsOne.src = 'images/chs1.jpg'
    chsOne.style.height = "300px"
    chsOne.style.width = "200px"

}