

export function slideTwo(){
    let chsTwo = document.createElement("img")

    let slideDiv = document.querySelector("#slideDiv");
    slideDiv.innerHTML = ""
    
    slideDiv.appendChild(chsTwo);
    chsTwo.src = 'images/chs2.jpg'
    chsTwo.style.height = '300px';
    chsTwo.style.width = '200px';
}

