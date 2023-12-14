const textAreaEl = document.getElementById("text");
const countEl = document.querySelector(".count");

textAreaEl.addEventListener("input", () => {
    const length = textAreaEl.value.length; 

    countEl.textContent = textAreaEl.value.length;
    if (length > 20) {
        textAreaEl.style.color = "red"; 
        countEl.style.color = "red";
    } else {
        textAreaEl.style.color = ""; 
        countEl.style.color = ""; 
    }
});
