"use strict";

const button = document.getElementById("btn")


function randomRGBColor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener("click",()=>{
    document.body.style.backgroundColor = randomRGBColor();
})
