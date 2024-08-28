


export function slideThree(){
    let chsThree = document.createElement("img")

    let slideDiv = document.querySelector("#slideDiv");
    slideDiv.innerHTML = ""
    
    slideDiv.appendChild(chsThree);
    chsThree.src = 'images/chs3.jpg'
    chsThree.style.height = '300px';
    chsThree.style.width = '200px';
}

