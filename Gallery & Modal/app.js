function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
const modal = document.querySelector(".modal");
function Modal(selection) {
  this.section = selection;
  this.images = this.section.querySelectorAll(".img");
  const imgs = this.images;
  this.images.forEach(function (img) {
    img.addEventListener("click", function (e) {
      const mainImg = modal.querySelector(".main-img");
      mainImg.src = e.target.src;
      const imageName = modal.querySelector(".image-name");
      imageName.textContent = `${e.target.getAttribute("alt")} Image ${
        e.target.dataset.id
      }`;
      const modalImages = modal.querySelector(".modal-images");
      imgs.forEach(function (img) {
        const modalImg = document.createElement("img");
        modalImg.setAttribute("src", `${img.src}`);
        modalImg.setAttribute("data-id", `${img.dataset.id}`);
        modalImg.setAttribute("alt", `${img.alt}`);
        modalImg.setAttribute("class", `modal-img`);
        modalImages.appendChild(modalImg);
        if (modalImg.src === mainImg.src) {
          modalImg.classList.add("selected");
        }
        modalImg.addEventListener("click", function (e) {
          mainImg.src = modalImg.src;
          const modalImages = modal.querySelectorAll(".modal-img");
          modalImages.forEach(function (mImg) {
            if (mImg === e.target) {
              mImg.classList.add("selected");
            } else {
              mImg.classList.remove("selected");
            }
          });
        });
      });

      const nextBtn = modal.querySelector(".next-btn");
      const prevBtn = modal.querySelector(".prev-btn");
      const closeBtn = modal.querySelector(".close-btn");
      const countStarter = document.querySelector(".selected");
      let count = countStarter.dataset.id;
      nextBtn.addEventListener("click", function () {
        const imgs = document.querySelectorAll(".modal-img");
        console.log(imgs);
        if (count < imgs.length) {
          count++;
          imgs.forEach(function (img) {
            if (img.dataset.id == count) {
              mainImg.src = img.src;
              img.classList.add("selected");
              imageName.textContent = `${img.getAttribute("alt")} Image ${
                img.dataset.id
              }`;
            } else {
              img.classList.remove("selected");
            }
          });
        } else {
          count = 1;
          imgs.forEach(function (img) {
            if (img.dataset.id == count) {
              mainImg.src = img.src;
              img.classList.add("selected");
              imageName.textContent = `${img.getAttribute("alt")} Image ${
                img.dataset.id
              }`;
            } else {
              img.classList.remove("selected");
            }
          });
        }
      });
      prevBtn.addEventListener("click", function () {
        const imgs = document.querySelectorAll(".modal-img");
        console.log(imgs);
        if (count > 1) {
          count--;

          imgs.forEach(function (img) {
            if (img.dataset.id == count) {
              mainImg.src = img.src;
              img.classList.add("selected");
              imageName.textContent = `${img.getAttribute("alt")} Image ${
                img.dataset.id
              }`;
            } else {
              img.classList.remove("selected");
            }
          });
        } else {
          count = imgs.length;
          imgs.forEach(function (img) {
            if (img.dataset.id == count) {
              mainImg.src = img.src;
              img.classList.add("selected");
              imageName.textContent = `${img.getAttribute("alt")} Image ${
                img.dataset.id
              }`;
            } else {
              img.classList.remove("selected");
            }
          });
        }
      });
      closeBtn.addEventListener("click", function () {
        const imgs = document.querySelectorAll("modal-img");
        modalImages.innerHTML = null;
        imgs.forEach(function (img) {
          img.classList.remove("selected");
        });
        modal.classList.remove("open");
      });

      modal.classList.add("open");
    });
  });
}

const natureSection = new Modal(getElement(".nature"));
const citySection = new Modal(getElement(".city"));
