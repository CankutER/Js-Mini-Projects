const productDOM = document.querySelector(".product");
const pathname = window.location.search;
const productId = pathname.slice(4, window.location.search.length);
const url = `https://course-api.com/javascript-store-single-product?id=${productId}`;

const fetchProduct = async (url) => {
  try {
    productDOM.innerHTML = `<h4 class='product-loading'>Loading...</h4>`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("There was an error loading the products");
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
    productDOM.innerHTML = `<p class='error'>There was an error loading the product...</p>`;
  }
};

const displayProduct = () => {
  fetchProduct(url).then((result) => {
    console.log(result);
    const { name, price, company, description, colors } = result.fields;
    const { url: image } = result.fields.image[0];
    document.title = name.toUpperCase();
    const colorsText = colors
      .map((color) => {
        return `<span class="product-color" style="background: ${color}"></span>`;
      })
      .join("");
    productDOM.innerHTML = ` <div class="product-wrapper">
        <img class="img" src=${image} alt="" />
        <div class="product-info">
          <h3>${name}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
           ${colorsText}s
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
  });
};

displayProduct();
