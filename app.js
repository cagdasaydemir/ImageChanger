const scenes_container = document.querySelector(".scenes__container");
const sceneImages = Array.from(scenes_container.children);
const navHTML = document.querySelector(".nav");

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
  } else {
    currentImg.classList.remove("show");
    sceneImages[sceneImages.length - 1].classList.add("show");
  }

  updateDots(0);
};

const createDots = () => {
  for (let i = 0; i < sceneImages.length; i++) {
    let dotBtnHTML = `<button data-id="${i}"onclick="updateDots(null, this)"
      } class="dotbtn ${i == 0 ? "active" : ""}">${i + 1}</button>`;
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
      if (nextDot) nextDot.classList.add("active");
      else {
        dots[0].classList.add("active");
      }
    } else if (Directions[direction] == "prev") {
      const prevDot = activeDot.previousElementSibling;
      if (prevDot) prevDot.classList.add("active");
      else {
        dots[dots.length - 1].classList.add("active");
      }
    }
  } else {
    targetItem.classList.add("active");
    const currentImg = document.querySelector(".show");
    const targetImg = sceneImages[targetItem.dataset.id];
    currentImg.classList.remove("show");

    targetImg.classList.add("show");
  }
  activeDot.classList.remove("active");
};
createDots();
