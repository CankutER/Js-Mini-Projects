const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
    const tabName = e.currentTarget.getAttribute("data-id");
    const tabContent = document.getElementById(tabName);
    tabContent.classList.add("active");
    btns.forEach(function (btn) {
      if (btn !== e.currentTarget) {
        btn.classList.remove("active");
      }
    });
    contents.forEach(function (content) {
      if (content !== tabContent) {
        content.classList.remove("active");
      }
    });
  });
});
