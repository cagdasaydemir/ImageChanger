const scenes_container = document.querySelector(".scenes__container");
const sceneImages = Array.from(scenes_container.children);
const navHTML = document.querySelector(".nav");
const ferrariLogo = `<object id="ferrariLogo" data="assets\\ferrariLogo.svg" ></object>`
const bigLogoBtn = document.querySelector(".bigLogoBtn");
const ferrariEmblem = document.querySelector("#ferrariEmblem");
console.log(ferrariEmblem);

const intro = () => {
  ferrariEmblem.classList.toggle("small");
  bigLogoBtn.classList.toggle("small");
}


const nextImg = () => {
  const currentImg = document.querySelector(".show");
  const nextImg = currentImg.nextElementSibling;
  if (nextImg) {
    currentImg.classList.remove("show");

    nextImg.classList.add("show");
  } else {
    currentImg.classList.remove("show");
    sceneImages[0].classList.add("show");
  }

  updateDots(1);
};

const prevImg = () => {
  const currentImg = document.querySelector(".show");
  const prevImg = currentImg.previousElementSibling;
  if (prevImg) {
    currentImg.classList.remove("show");

    prevImg.classList.add("show");
    prevImg.innerHTML = ferrariLogo;
  } else {
    currentImg.classList.remove("show");
    sceneImages[sceneImages.length - 1].classList.add("show");
    sceneImages[sceneImages.length - 1].innerHTML = ferrariLogo;
  }

  updateDots(0);
};

const createDots = () => {
  
  for (let i = 0; i < sceneImages.length; i++) {
    let dotBtnHTML = `<button data-id="${i}"onclick="updateDots(null, this)"
      } class="dotbtn ${i == 0 ? "active" : ""}">${sceneImages[i].classList.contains('show') == true ? ferrariLogo : i+1}</button>`;
    navHTML.insertAdjacentHTML("beforeend", dotBtnHTML);
  }
};

const Directions = {
  0: "prev",
  1: "next",
};
const updateDots = (direction, targetItem) => {
  const activeDot = navHTML.querySelector(".active");
  const dots = navHTML.children;
  if (!targetItem) {
    if (Directions[direction] == "next") {
      const nextDot = activeDot.nextElementSibling;
      if (nextDot) {nextDot.classList.add("active");
                 nextDot.innerHTML = ferrariLogo;
    }
      else {
        dots[0].classList.add("active");
        dots[0].innerHTML = ferrariLogo;
      }
    } else if (Directions[direction] == "prev") {
      const prevDot = activeDot.previousElementSibling;
      if (prevDot) {prevDot.classList.add("active");
    prevDot.innerHTML =ferrariLogo;
  }
      else {
        dots[dots.length - 1].classList.add("active");
        dots[dots.length - 1].innerHTML =ferrariLogo;
      }
    }
  } else {
    targetItem.classList.add("active");
    targetItem.innerHTML=ferrariLogo;
    const currentImg = document.querySelector(".show");
    const targetImg = sceneImages[targetItem.dataset.id];
    currentImg.classList.remove("show");

    targetImg.classList.add("show");
  }
  activeDot.classList.remove("active");
  activeDot.innerHTML = parseInt(activeDot.dataset.id) + 1;
};
createDots();
