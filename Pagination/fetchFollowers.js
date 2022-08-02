const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cannot get followers");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const title = document.querySelector(".section-title");
    title.childNodes[1].textContent = error;
    console.log(error);
  }
};

export default fetchFollowers;
