const id = window.location.search.slice(4, window.location.search.length);
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
console.log(url);
const section = document.querySelector(".single-drink");
const loader = document.querySelector(".loading");
const fetchDrink = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("There was an error loading the cocktail.");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    section.innerHTML = `<h1>${error}</h1>`;
    loader.classList.add("hide-loading");
    console.log(error);
  }
};

const displayDrink = async (url) => {
  const drink = await fetchDrink(url);
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: desc,
  } = drink.drinks[0];
  const entries = Object.entries(drink.drinks[0]);
  const ings = entries.filter((entry) => {
    if (entry[0].includes("Ingredient") && entry[1] !== null) {
      return entry;
    }
  });
  const ingsList = ings
    .map((ing) => {
      return ` <li>${ing[1]}</li>`;
    })
    .join("");
  section.innerHTML = ` <img src=${image} alt="cocktail" class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${name}</h2>
        <p class="drink-desc">${desc}</p>
        <ul class="drink-ingredients">${ingsList}</ul>
        <a href="index.html" class="btn">all cocktails</a>
      </article>`;
  loader.classList.add("hide-loading");
};
displayDrink(url);
