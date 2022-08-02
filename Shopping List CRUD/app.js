// ****** SELECT ITEMS **********
const alerT = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option

// ****** EVENT LISTENERS **********
let idCount;
let idList;
let editId;
window.addEventListener("DOMContentLoaded", function () {
  // grab idList from Local Storage
  if (localStorage.getItem("idList")) {
    idList = JSON.parse(localStorage.getItem("idList"));
  } else {
    idList = [];
  }
  // grab idCount from Local Storage
  if (localStorage.getItem("idCount")) {
    idCount = localStorage.getItem("idCount");
  } else {
    idCount = 0;
  }
  // create list items from Local Storage

  // for (let i = 0; i < localStorage.length; i++) {
  //   if (idList.includes(localStorage.key(i))) {
  //     const element = document.createElement("article");
  //     element.setAttribute("class", "grocery-item");
  //     element.setAttribute("data-id", `${localStorage.key(i)}`);
  //     element.innerHTML = localStorage.getItem(localStorage.key(i));
  //     list.appendChild(element);
  //   }
  // }

  //Alternative (may be better)
  idList.forEach(function (id) {
    const element = document.createElement("article");
    element.setAttribute("class", "grocery-item");
    element.innerHTML = localStorage.getItem(`${id}`);
    const para = element.querySelector(".title");
    element.setAttribute("data-id", `${para.dataset.id}`);
    list.appendChild(element);
  });
  // add utility
  if (list.children.length !== 0) {
    container.classList.add("show-container");
  }
  const deleteBtn = document.querySelectorAll(".delete-btn");
  const editBtn = document.querySelectorAll(".edit-btn");
  deleteBtn.forEach(function (btn) {
    btn.addEventListener("click", removeListItem);
  });
  editBtn.forEach(function (btn) {
    btn.addEventListener("click", editItem);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (submitBtn.textContent === "submit") {
    addItem();
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const editBtn = document.querySelectorAll(".edit-btn");
    deleteBtn.forEach(function (btn) {
      btn.addEventListener("click", removeListItem);
    });
    editBtn.forEach(function (btn) {
      btn.addEventListener("click", editItem);
    });
  } else {
    const groceryList = document.querySelectorAll(".grocery-item");

    groceryList.forEach(function (item) {
      if (item.dataset.id === editId) {
        const para = item.querySelector(".title");
        para.textContent = grocery.value;
        grocery.value = "";
        submitBtn.textContent = "submit";
        localStorage.setItem(`${item.dataset.id}`, item.innerHTML);
      }
    });
  }
});

clearBtn.addEventListener("click", function () {
  if (list.children.length) {
    list.innerHTML = ``;
    for (i = 0; i < idList.length; i++) {
      let item = idList[i];
      localStorage.removeItem(`${item}`);
    }
    localStorage.removeItem("idCount");
    idCount = 0;
    idList = [];
    localStorage.setItem("idList", JSON.stringify(idList));

    function showEmpty() {
      alerT.classList.add("alert-danger");
      alerT.textContent = "List Reset";
    }
    function hideEmpty() {
      alerT.classList.remove("alert-danger");
      alerT.textContent = "";
    }
    setTimeout(showEmpty);
    setTimeout(hideEmpty, 1000);
    container.classList.remove("show-container");
  }
});
// ****** FUNCTIONS **********

function removeListItem(e) {
  const listItem = e.currentTarget.parentElement.parentElement;
  listItem.remove();
  const dataId = listItem.dataset.id;
  localStorage.removeItem(`${dataId}`);
  const index = idList.indexOf(`${dataId}`);
  idList.splice(index, 1);
  localStorage.setItem("idList", JSON.stringify(idList));

  if (list.children.length === 0) {
    container.classList.remove("show-container");
    localStorage.removeItem("idCount");
    idCount = 0;
  }
  function showRemoved() {
    alerT.classList.add("alert-danger");
    alerT.textContent = "Item Removed";
  }
  function hideRemoved() {
    alerT.classList.remove("alert-danger");
    alerT.textContent = "";
  }
  setTimeout(showRemoved);
  setTimeout(hideRemoved, 1000);
}

function addItem() {
  let input = grocery.value;
  if (input) {
    const element = document.createElement("article");
    element.setAttribute("class", "grocery-item");
    element.setAttribute("data-id", `${idCount}`);
    idList.push(`${idCount}`);
    localStorage.setItem("idList", JSON.stringify(idList));

    element.innerHTML = `
            <p class="title" data-id=${idCount}>${input}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    list.appendChild(element);

    const showSuccess = function () {
      alerT.textContent = "Successfully added";
      alerT.classList.add("alert-success");
    };
    const hideSuccess = function () {
      alerT.textContent = "";
      alerT.classList.remove("alert-success");
    };
    setTimeout(showSuccess, 0);

    setTimeout(hideSuccess, 1000);
    container.classList.add("show-container");
    localStorage.setItem(`${idCount}`, element.innerHTML);
    idCount++;
    localStorage.setItem(`idCount`, `${idCount}`);
  } else {
    const showDanger = function () {
      alerT.textContent = "Failed";
      alerT.classList.add("alert-danger");
    };
    const hideDanger = function () {
      alerT.textContent = "";
      alerT.classList.remove("alert-danger");
    };
    setTimeout(showDanger, 0);

    setTimeout(hideDanger, 1000);
  }
  grocery.value = "";
}
function editItem(e) {
  const listItem = e.currentTarget.parentElement.parentElement;

  const para = listItem.querySelector(".title");
  grocery.value = para.textContent;
  grocery.focus();
  submitBtn.textContent = "edit";
  editId = e.currentTarget.parentElement.parentElement.dataset.id;
  console.log(editId);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
