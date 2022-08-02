const toggle = document.querySelector(".btn");
const html = document.querySelector("html");
toggle.addEventListener("click", () => html.classList.toggle("dark-theme"));
const section = document.querySelector(".articles");

const content = articles.map((article) => {
  const formatDate = moment(article.date).format("MMM Do, YYYY");
  const text = ` <article class="post">
        <h2>${article.title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${article.length} min read</span>
        </div>
        <p>
         ${article.snippet}
        </p>
      </article>`;
  return text;
});

section.innerHTML = content.join("");
