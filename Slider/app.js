const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");

let starter = 0;
let count = 0;
slides.forEach(function (slide) {
  slide.style.left = `${starter}%`;
  starter += 100;
  count++;
});

let position = 0;
next.addEventListener("click", function () {
  if (position > -100 * (count - 1)) {
    position -= 100;
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(${position}%)`;
    });
  } else {
    position = 0;
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(${position}%)`;
    });
  }
});
prev.addEventListener("click", function () {
  if (position < 0) {
    position += 100;
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(${position}%)`;
    });
  } else {
    position = -100 * (count - 1);
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(${position}%)`;
    });
  }
});
