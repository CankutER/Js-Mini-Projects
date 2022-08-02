const display = (followers) => {
  const displayed = followers
    .map((follower) => {
      const { login: name, avatar_url: image, html_url: url } = follower;
      return `  <div class="card">
            <img src=${image} alt="" />
            <h4>${name}</h4>
            <a href=${url}>
              <button type="button" class="btn">View Profile</button>
            </a>
          </div>`;
    })
    .join("");
  const followersContainer = document.querySelector(".container");
  followersContainer.innerHTML = displayed;
  const title = document.querySelector(".section-title");
  title.childNodes[1].textContent = "GitHub Followers Paginated";
};

export default display;
