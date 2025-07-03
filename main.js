const btn = document.getElementById("di-genre-btn");
const dropdown = document.getElementById("dropdown");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("visible");
    dropdown.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.classList.remove("visible");
        dropdown.classList.add("hidden");
    }
});
    





















































const bttn = document.getElementById('toggle-btn');
  const list = document.getElementById('toggle-text');

  bttn.addEventListener('click', () => {
      list.classList.toggle('hidden')
  });
                 
