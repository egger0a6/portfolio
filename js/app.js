/*-------------------------------- Constants --------------------------------*/

import {projectData, skillsData} from "../data/data.js";


/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const skillsCards = document.querySelector("#skills-container");
const cardContainer = document.querySelector("#card-container");
const lightDarkBtn = document.querySelector(".light-mode-icon");
const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const scrollBtn = document.querySelector("#scroll-up");
const scrollBtnImg = document.querySelector(".scroll-img");
const ghImgEl = document.querySelector(".gh-logo");


/*----------------------------- Event Listeners -----------------------------*/

lightDarkBtn.addEventListener("click", toggleLightDark);
scrollBtn.addEventListener("click" , scrollUp);

/*-------------------------------- Functions --------------------------------*/

checkDarkPref();
init();

function init() {
  render();
}

function render() {
  createProjectCards();
  createSkillCards();
}

function createSkillCards() {
  skillsCards.innerHTML = "";
  skillsData.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("col-lg-3", "d-flex", "justify-content-center");
    skillCard.innerHTML =
    `<div>
      <img src="/assets/icons/${skill}.svg" alt="${skill} icon"
      class="skill-icon default-card">
    </div>`;
    skillsCards.appendChild(skillCard);
  });
}

function createProjectCards() {
  cardContainer.innerHTML = "";
  projectData.forEach((project) => appendProject(project));
}

function appendProject(project) {
  const projCard = document.createElement("div");
  projCard.classList.add("col-lg-4", "mt-4");
  projCard.innerHTML =
  `<div class="card">
    <img src="${project.image}" alt="screensshot of ${project.title}" class="card-img">
    <div class="card-img-overlay">
      <div class="card-items text-center">
        <h1 class="card-title">${project.title}</h1>
        <p class="card-text">${project.description}</p>
        <div class="card-links">
          <a href=${project.deployment} class="btn" target="_blank">See Live</a>
          <a href=${project.github} class="btn" target="_blank">GitHub Repo</a>
        </div>
      </div>
    </div>
  </div>`;
  cardContainer.append(projCard);
}

function toggleLightDark (evt) {
  body.className = (body.className === "dark") ? "" : "dark";

  if (navbar.classList.contains("navbar-light")) {
    navbar.style.backgroundColor = null;
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark", "bg-dark");
  }
  else {
    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light");
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  }

  if (lightDarkBtn.src.match("/assets/icons/lightswitch_on.png")) {
    lightDarkBtn.src = "/assets/icons/lightswitch_off.png";
  }
  else {
    lightDarkBtn.src = "/assets/icons/lightswitch_on.png";
  }

  if (ghImgEl.src.match("/assets/icons/gh.svg")) {
    ghImgEl.src = "./assets/icons/gh_invert.png";
  }
  else {
    ghImgEl.src = "./assets/icons/gh.svg";
  }

  if (scrollBtnImg.src.match("/assets/icons/uparrow.png")) {
    console.log("here1")
    scrollBtnImg.src = "./assets/icons/uparrow_invert.png";
  }
  else {
    scrollBtnImg.src = "./assets/icons/uparrow.png";
  }

}

function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark();
  }
}

function scrollUp() {
  window.scrollTo( {
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}