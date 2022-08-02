import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";
const title = document.querySelector(".section-title");
const start = async () => {
  try {
    const followers = await fetchFollowers();
    const paginatedFollowers = paginate(followers, 12);
    console.log(paginatedFollowers);
    const numOfPages = paginatedFollowers.length;
    displayButtons(numOfPages);
    displayFollowers(paginatedFollowers[0]);

    const pageBtns = document.querySelectorAll(".page-btn");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    pageBtns[0].classList.add("active-btn");
    pageBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        title.childNodes[1].textContent = "Loading...";
        const num = parseInt(btn.textContent);
        displayFollowers(paginatedFollowers[num - 1]);
        pageBtns.forEach((btn) => {
          btn.classList.remove("active-btn");
        });
        btn.classList.add("active-btn");
      });
    });
    nextBtn.addEventListener("click", function () {
      title.childNodes[1].textContent = "Loading...";
      const activeBtn = document.querySelector(".active-btn");
      if (activeBtn.dataset.id < pageBtns.length) {
        pageBtns.forEach((btn) => {
          btn.classList.remove("active-btn");
        });
        displayFollowers(paginatedFollowers[activeBtn.dataset.id]);
        pageBtns[activeBtn.dataset.id].classList.add("active-btn");
      }
    });
    prevBtn.addEventListener("click", function () {
      title.childNodes[1].textContent = "Loading...";
      const activeBtn = document.querySelector(".active-btn");
      if (activeBtn.dataset.id > 1) {
        pageBtns.forEach((btn) => {
          btn.classList.remove("active-btn");
        });
        displayFollowers(paginatedFollowers[activeBtn.dataset.id - 2]);
        pageBtns[activeBtn.dataset.id - 2].classList.add("active-btn");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

start();
