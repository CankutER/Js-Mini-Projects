const displayButtons = (number) => {
  const pageContainer = document.querySelector(".btn-container");
  let pages = [];
  for (let i = 1; i <= number; i++) {
    pages.push(
      `<button type="button" data-id=${i} class="page-btn">${i}</button>`
    );
  }
  pageContainer.innerHTML = `  <button type="button" class="prev-btn">prev</button>
          ${pages.join("")}
          <button type="button" class="next-btn">next</button>`;
};

export default displayButtons;
