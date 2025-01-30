const sectionElt = document.querySelectorAll(".body__main--section");
const stepsElt = document.querySelector(".body__main--steps");
const steps = document.querySelectorAll(".body__main--steps-step");

window.addEventListener("DOMContentLoaded", () => {
  sectionElt.forEach((el) => {
    el.style.display = "none";
  });
  sectionElt[0].style.display = "inline";
});

stepsElt.addEventListener("click", (e) => {
  let target = e.target;
  //console.log(target.classList);
  steps.forEach((step) => step.style.backgroundColor = "white");
  sectionElt.forEach((section) => section.style.display = "none");
  if (target.id == "one") {
    steps[0].style.backgroundColor = "var(--red)";
    sectionElt[0].style.display = "inline";
  } else if (target.id == "two") {
    steps[1].style.backgroundColor = "var(--red)";
    sectionElt[1].style.display = "inline";
  } else {
    steps[2].style.backgroundColor = "var(--red)";
    sectionElt[2].style.display = "inline";
  }
});
