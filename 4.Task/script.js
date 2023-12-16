"use strict";

const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const countText = document.querySelector(".counter");

let countValue = 0;

increaseButton.addEventListener("click", () => {
  countValue++;
  countText.textContent = Math.abs(countValue);
  if(countValue > 0){
    countText.style.color = "green";
  }else if(countValue ==0){
    countText.style.color = "white";
  }else{
    countText.style.color = "red";
  }
});

decreaseButton.addEventListener("click", () => {
  countValue--;
  countText.textContent = Math.abs(countValue);
  if(countValue > 0){
    countText.style.color = "green";
  }else if(countValue ==0){
    countText.style.color = "white";
  }else{
    countText.style.color = "red";
  }
});
