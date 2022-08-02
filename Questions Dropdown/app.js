const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    questions.forEach(function (question) {
      if (
        question !== e.currentTarget.parentElement.parentElement &&
        question.classList.contains("show-text")
      ) {
        question.classList.remove("show-text");
      }
    });
    e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
  });
});
