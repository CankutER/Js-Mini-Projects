const url = "https://course-api.com/javascript-store-products/";
const container = document.querySelector(".products-container");
const singleProduct = document.querySelector(".single-product");
const productImg = document.querySelector(".single-product-img");
const productName = document.querySelector(".name");
const productPrice = document.querySelector(".price");
const spinner = document.querySelector(".loading");
const errorMessage = document.querySelector(".error");
errorMessage.style.display = "none";

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("There was an error loading the products");
    } else {
      return data;
    }
  } catch (error) {
    // errorMessage.style.display = "block";
  }
};

const displayProducts = () => {
  fetchProducts(url)
    .then((result) => {
      console.log(result);
      //   if (result)
      //    {
      result.forEach((product) => {
        const element = document.createElement("a");
        element.setAttribute("href", `product.html?id=${product.id}`);
        element.setAttribute("class", "single-product");
        element.innerHTML = `  <img src=${
          product.fields.image[0].url
        } alt="" class="single-product-img img" />
                <footer>
                  <h5 class="name">${product.fields.name}</h5>
                  <span class="price">$${product.fields.price / 100}</span>
                </footer>`;
        container.appendChild(element);
      });
      //   }
    })
    .catch((error) => {
      errorMessage.style.display = "block";
    })
    .then((after) => {
      spinner.style.display = "none";
    });
};

displayProducts();
