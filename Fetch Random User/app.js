const url = "https://randomuser.me/api/";
const icons = document.querySelectorAll(".icon");
const userTitle = document.querySelector(".user-title");
const userValue = document.querySelector(".user-value");
const userImage = document.querySelector(".user-img");
const btn = document.querySelector(".btn");

const fetchUser = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching random user");
    }
    const user = await response.json();
    return user.results[0];
  } catch (error) {
    console.log(error);
  }
};

const displayUser = async () => {
  userImage.src = "./photo-placeholder-icon-17.jpg";
  userTitle.textContent = `My name is`;
  userValue.textContent = "Loading...";
  const result = await fetchUser(url);
  console.log(result);
  const { email, phone } = result;
  const { large: image } = result.picture;
  const { age } = result.dob;
  const { password } = result.login;
  const street = `${result.location.street.number} ${result.location.street.name}`;
  const name = `${result.name.first} ${result.name.last}`;
  const user = {
    name,
    email,
    age,
    street,
    phone,
    password,
  };
  userImage.src = image;

  userValue.textContent = name;
  for (const property in user) {
    icons.forEach((icon) => {
      if (icon.dataset.label === property) {
        icon.dataset.value = user[property];
      }
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  displayUser();
});

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    icons.forEach((icon) => {
      icon.classList.remove("active");
    });
    this.classList.add("active");
    userTitle.textContent = `My ${icon.dataset.label} is`;
    userValue.textContent = `${icon.dataset.value}`;
  });
});

btn.addEventListener("click", () => {
  displayUser();
  icons.forEach((icon) => {
    if (icon.dataset.label !== "name") {
      icon.classList.remove("active");
    } else {
      icon.classList.add("active");
    }
  });
});
