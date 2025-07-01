const post = JSON.parse(localStorage.getItem("currentPost"));

if (post) {
  document.getElementById("post-content").innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
  `;
} else {
  document.getElementById("post-content").innerText = "No post selected.";
}