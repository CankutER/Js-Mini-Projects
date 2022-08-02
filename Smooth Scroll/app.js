// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");

const time = new Date();
date.textContent = time.getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const height = links.getBoundingClientRect().height;

  if (linksContainer.getBoundingClientRect().height === 0) {
    linksContainer.style.height = `${height}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const banner = document.querySelector(".banner");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  if (banner.getBoundingClientRect().bottom < window.innerHeight)
    navbar.classList.add("fixed-nav");
  else if (navbar.classList.contains("fixed-nav")) {
    navbar.classList.remove("fixed-nav");
  }
  if (window.scrollY > 500) {
    topLink.classList.add("show-link");
  } else if (topLink.classList.contains("show-link")) {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    if (window.innerWidth >= 800) {
      if (!navbar.classList.contains("fixed-nav")) {
        window.scrollTo({
          left: 0,
          top: section.offsetTop - 2 * navbar.getBoundingClientRect().height,
        });
      } else {
        window.scrollTo({
          left: 0,
          top: section.offsetTop - navbar.getBoundingClientRect().height,
        });
      }
    } else {
      if (!navbar.classList.contains("fixed-nav")) {
        window.scrollTo({
          left: 0,
          top:
            section.offsetTop -
            2 * navbar.getBoundingClientRect().height +
            links.getBoundingClientRect().height,
        });
      } else {
        window.scrollTo({
          left: 0,
          top:
            section.offsetTop -
            navbar.getBoundingClientRect().height +
            links.getBoundingClientRect().height,
        });
      }
    }
    linksContainer.style.height = 0;
  });
});
