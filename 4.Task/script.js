

"use strict";

const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const counterEl = document.querySelector(".counter");

let counter = 0;



increaseBtn.addEventListener("click", () => {
    counter++;

    if (counter > 0) {
        counterEl.style.color = "green";
    } else if (counter === 0) {
        counterEl.style.color = "white";
    }

    counterEl.textContent = Math.abs(counter);
})

decreaseBtn.addEventListener("click", () => {
    counter--;

    if (counter < 0) {
        counterEl.style.color = "red";
    } else if (counter === 0) {
        counterEl.style.color = "white";
    }

    counterEl.textContent = Math.abs(counter);
})