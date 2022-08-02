const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
const reset = document.querySelectorAll(".reset");

const counter = {
  increase() {
    let value = parseInt(this.parentElement.previousElementSibling.textContent);
    value++;
    this.parentElement.previousElementSibling.textContent = `${value}`;
  },
  decrease() {
    let value = parseInt(this.parentElement.previousElementSibling.textContent);
    value--;
    this.parentElement.previousElementSibling.textContent = `${value}`;
  },
  reset() {
    let value = parseInt(this.parentElement.previousElementSibling.textContent);
    value = 0;
    this.parentElement.previousElementSibling.textContent = `${value}`;
  },
};

increase.forEach(function (btn) {
  btn.addEventListener("click", counter.increase);
});
decrease.forEach(function (btn) {
  btn.addEventListener("click", counter.decrease);
});
reset.forEach(function (btn) {
  btn.addEventListener("click", counter.reset);
});
