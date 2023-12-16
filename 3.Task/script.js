const inputEl = document.getElementById("text")
let countEl = document.querySelector(".count");

inputEl.addEventListener("input", ()=>{
    countEl.textContent = inputEl.value.length
    if(inputEl.value.length>10){
        inputEl.style.border = "1px solid red";
        inputEl.style.color = "red";
        countEl.style.color = "red";
    }
    else{
        inputEl.style.border = "inherit";
        inputEl.style.color = "inherit";
        countEl.style.color = "inherit";
    }
})
