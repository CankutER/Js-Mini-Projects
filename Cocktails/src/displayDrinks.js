import fetchDrinks from "./fetchDrinks.js";
const displayDrinks = async (url) => {
  const drinks = await fetchDrinks(url);
  console.log(drinks);
  const displayedDrinks = drinks.drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return ` <a href="./drink.html">
          <article class="cocktail" data-id=${id}>
            <img src=${image} alt="cocktail" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  loader.classList.add("hide-loading");
  sectionCenter.innerHTML = displayedDrinks;
};

export default displayDrinks;
