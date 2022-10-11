const Container = document.querySelector("#container");
const Images = Array.from(Container.children);
const Nav = document.querySelector("#nav");
const BtnLogo = `<object id="btnLogo" data="assets\\ferrariLogo.svg" ></object>`;
const IntroLogo = document.querySelector("#introLogo");
const FerrariEmblem = document.querySelector("#ferrariEmblem");
var currentImg;
var nextImg;
var prevImg;


const Directions = {
  0: "prev",
  1: "next",
};

const intro = () => {
  FerrariEmblem.classList.toggle("small");
  IntroLogo.classList.toggle("small");
};

const nextImgCall = () => {
  currentImg = document.querySelector(".current");
  nextImg = currentImg.nextElementSibling;
  if (nextImg) {
    currentImg.classList.remove("current");
    nextImg.classList.add("current");
  } else {
    currentImg.classList.remove("current");
    Images[0].classList.add("current");
  }
  updateDots(1);
};

const prevImgCall = () => {
  currentImg = document.querySelector(".current");
  prevImg = currentImg.previousElementSibling;
  if (prevImg) {
    currentImg.classList.remove("current");
    prevImg.classList.add("current");
    prevImg.innerHTML = BtnLogo;
  } else {
    currentImg.classList.remove("current");
    Images[Images.length - 1].classList.add("current");
    Images[Images.length - 1].innerHTML = BtnLogo;
  }
  updateDots(0);
};

const createDots = () => {
  for (let i = 0; i < Images.length; i++) {
    let dotBtnHTML = `<button data-id="${i}"onclick="updateDots(null, this)"
      } class="dotbtn ${i == 0 ? "active" : ""}">${
      Images[i].classList.contains("current") == true ? BtnLogo : i + 1
    }</button>`;
    Nav.insertAdjacentHTML("beforeend", dotBtnHTML);
  }
};

const updateDots = (direction, targetItem) => {
  const activeDot = Nav.querySelector(".active");
  const dots = Nav.children;
  if (!targetItem) {
    if (Directions[direction] == "next") {
      const nextDot = activeDot.nextElementSibling;
      if (nextDot) {
        nextDot.classList.add("active");
        nextDot.innerHTML = BtnLogo;
      } else {
        dots[0].classList.add("active");
        dots[0].innerHTML = BtnLogo;
      }
    } 
    else if (Directions[direction] == "prev") {
      const prevDot = activeDot.previousElementSibling;
      if (prevDot) {
        prevDot.classList.add("active");
        prevDot.innerHTML = BtnLogo;
      } else {
        dots[dots.length - 1].classList.add("active");
        dots[dots.length - 1].innerHTML = BtnLogo;
      }
    }
 } else {
    targetItem.classList.add("active");
    targetItem.innerHTML = BtnLogo;
    currentImg = document.querySelector(".current");
    const targetImg = Images[targetItem.dataset.id];
    currentImg.classList.remove("current");
    targetImg.classList.add("current");
  }
  activeDot.classList.remove("active");
  activeDot.innerHTML = parseInt(activeDot.dataset.id) + 1;
};
createDots();
