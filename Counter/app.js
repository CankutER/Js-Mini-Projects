const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("increase")) {
      count++;
    } else if (e.currentTarget.classList.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});

// Personal Alternative Solution

// increase.addEventListener("click", function () {
//   valueNumber += 1;
//   value.textContent = valueNumber;
//   if (valueNumber > 0) {
//     value.style.color = "blue";
//   } else if (valueNumber < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
// decrease.addEventListener("click", function () {
//   valueNumber -= 1;
//   value.textContent = valueNumber;
//   if (valueNumber > 0) {
//     value.style.color = "blue";
//   } else if (valueNumber < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
// reset.addEventListener("click", function () {
//   valueNumber = 0;
//   value.textContent = valueNumber;
//   if (valueNumber > 0) {
//     value.style.color = "blue";
//   } else if (valueNumber < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
