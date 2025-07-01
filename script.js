const posts = [
  { id: 1, title: "Welcome to My Blog", content: "This is my first blog post!" },
  { id: 2, title: "Why I Love JavaScript", content: "Because it's everywhere and fun!" },
  { id: 3, title: "Simple Tips for HTML & CSS", content: "Use semantic tags and flexbox." }
];

localStorage.setItem("posts", JSON.stringify(posts));

function loadPosts() {
  const postList = document.getElementById("post-list");
  const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

  savedPosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-card";
    div.innerText = post.title;
    div.onclick = () => {
      localStorage.setItem("currentPost", JSON.stringify(post));
      window.location.href = "post.html";
    };
    postList.appendChild(div);
  });
}

loadPosts();