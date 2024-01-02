
const boxes = document.querySelectorAll(".top-box");
const bottomBoxes = document.querySelectorAll(".bottom-box");
const icons = document.querySelectorAll(".icon img");

let lastIndex = null;

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (lastIndex !== null && lastIndex !== index) {
      bottomBoxes[lastIndex].classList.remove("active");
      icons[lastIndex].src = "./assets/icons/plus-large-svgrepo-com (1).svg";
    }

    if (bottomBoxes[index].classList.contains("active")) {
      bottomBoxes[index].classList.remove("active");
      icons[index].src = "./assets/icons/plus-large-svgrepo-com (1).svg";
      lastIndex = null;
    } else {
      bottomBoxes[index].classList.add("active");
      icons[index].src = "./assets/icons/subtraction-svgrepo-com (1).svg";
      lastIndex = index;
    }
  });
});
