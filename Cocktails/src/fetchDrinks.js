const fetchDrinks = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("There was an error loading the cocktail.");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
