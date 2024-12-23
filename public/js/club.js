window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".body__main--form").style.display = "none";
});

document
  .querySelector(".body__main--title-add-icon")
  .addEventListener("click", () => {
    document.querySelector(".body__main--form").style.display = "block";
  });

