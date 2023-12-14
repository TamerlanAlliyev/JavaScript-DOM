"use strict";

const button = document.getElementById("btn");
const bodyEl = document.querySelector("body");

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 256);
};

const generateRandomColor = () => {
    return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
};

button.addEventListener("click", () => {
    bodyEl.style.backgroundColor = generateRandomColor();
});
