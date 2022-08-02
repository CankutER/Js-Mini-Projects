const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const urlSingle = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1";
import getElement from "./src/getElement.js";

const sectionCenter = getElement(".section-center");
const loader = getElement(".loading");
const errorMsg = getElement(".title");
const searchBar = getElement("input");

const fetchDrinks = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("There was an error loading the cocktail.");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    errorMsg.textContent = error;
    loader.classList.add("hide-loading");
    console.log(error);
  }
};
const displayDrinks = async (url) => {
  errorMsg.textContent = "";
  const drinks = await fetchDrinks(url);
  try {
    console.log(drinks);
    const displayedDrinks = drinks.drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

        return ` <a href="drink.html?id=${id}">
                       <article class="cocktail" data-id=${id}>
                         <img src=${image} alt="cocktail" />
                         <h3>${name}</h3>
                       </article>
                     </a>`;
      })
      .join("");
    loader.classList.add("hide-loading");
    sectionCenter.innerHTML = displayedDrinks;
  } catch (error) {
    if (!errorMsg.textContent) {
      sectionCenter.innerHTML = "";
      errorMsg.textContent = "No such drink found";
      loader.classList.add("hide-loading");
    }
  }
};
displayDrinks(URL);

searchBar.addEventListener("keyup", (e) => {
  loader.classList.remove("hide-loading");
  const input = e.currentTarget.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  if (input) {
    displayDrinks(url);
  } else {
    displayDrinks(URL);
  }
});
