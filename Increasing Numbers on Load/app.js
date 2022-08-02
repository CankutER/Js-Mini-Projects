const numbers = document.querySelectorAll(".number");

const numbersArr = [...numbers];

const countUp = (span) => {
  let i = 0;

  const countInterval = setInterval(function () {
    i += Math.ceil(span.dataset.value / 1000);

    if (i > span.dataset.value) {
      i = span.dataset.value;
      clearInterval(countInterval);
    }
    span.textContent = `${i}+`;
  }, 1);
};

for (const item of numbersArr) {
  countUp(item);
}
