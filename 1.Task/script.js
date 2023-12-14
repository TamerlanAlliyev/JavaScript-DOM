/*
const boxEl = document.querySelector(".top-box");
const btboxEl = document.querySelector(".bottom-box");
const imgEl = document.querySelector(".icon img");

let isClicked = false;

boxEl.addEventListener("click", () => {
  if (!isClicked) {
    btboxEl.style.display = "flex";
    boxEl.style.borderRadius = "5px 5px 0 0";
    imgEl.src = "./assets/icons/subtraction-svgrepo-com (1).svg"; 
    isClicked = true;
  } else {
    btboxEl.style.display = "none";
    boxEl.style.borderRadius = "5px";
    imgEl.src = "./assets/icons/plus-large-svgrepo-com (1).svg";
    isClicked = false;
  }
});

*/

const boxEl = document.querySelectorAll(".top-box");
const btboxEl = document.querySelectorAll(".bottom-box");
const imgEl = document.querySelectorAll(".icon img");

let isClicked = false;

boxEl.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (!isClicked) {
      btboxEl[index].style.display = "flex";
      boxEl[index].style.borderRadius = "5px 5px 0 0";
      imgEl[index].src = "./assets/icons/subtraction-svgrepo-com (1).svg"; 
      isClicked = true;
    } else {
      btboxEl[index].style.display = "none";
      boxEl[index].style.borderRadius = "5px";
      imgEl[index].src = "./assets/icons/plus-large-svgrepo-com (1).svg";
      isClicked = false;
    }
  });
});
