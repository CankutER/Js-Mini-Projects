const btn = document.getElementById("btn");
const main = document.querySelector("main");
const title = document.querySelector(".color");
const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function getRandomNumber() {
  return Math.floor(Math.random() * chars.length);
}
btn.addEventListener("click", function () {
  const char1 = getRandomNumber();
  const char2 = getRandomNumber();
  const char3 = getRandomNumber();
  const char4 = getRandomNumber();
  const char5 = getRandomNumber();
  const char6 = getRandomNumber();
  const colorValue =
    "#" +
    chars[char1] +
    chars[char2] +
    chars[char3] +
    chars[char4] +
    chars[char5] +
    chars[char6];
  document.body.style.backgroundColor = colorValue;
  title.textContent = colorValue;
});
