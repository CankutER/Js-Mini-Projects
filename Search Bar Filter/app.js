const productsContainer = document.querySelector(".products-container");
const companies = document.querySelector(".companies");
const displayItems = (productArray) => {
  const productsSection = productArray.map((productArray) => {
    const { title, image, price } = productArray;
    const content = `<article class="product">
          <img
            src=${image}
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    return content;
  });

  productsContainer.innerHTML = productsSection.join("");
};
const displayBtns = () => {
  const companyBtns = new Set();
  products.forEach((product) => companyBtns.add(product.company));
  const btnArray = [...companyBtns];
  const btnContent = btnArray.reduce(
    (acc, curr) => {
      const text = ` <button class="company-btn">${curr}</button>`;
      acc.push(text);
      return acc;
    },
    [` <button class="company-btn">all</button>`]
  );
  // const btnContent = btnArray.map((btn) => {
  //   const text = ` <button class="company-btn">${btn}</button>`;

  //   return text;
  // });

  // btnContent.push(`<button class="company-btn">all</button>`);
  companies.innerHTML = btnContent.join("");
  const btns = document.querySelectorAll(".company-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const companyName = e.currentTarget.textContent;
      if (companyName !== "all") {
        const filtered = products.filter((product) =>
          product.company.includes(companyName)
        );
        displayItems(filtered);
      } else {
        displayItems(products);
      }
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  displayItems(products);
  displayBtns();
});

const searchBar = document.querySelector(".search-input");

searchBar.addEventListener("keyup", function () {
  const input = this.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(input)
  );
  displayItems(filtered);
});
