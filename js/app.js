/*-------------------------------- Constants --------------------------------*/

import {projectData, skillsData} from "../data/data.js";


/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const menuBtnEl = document.querySelector("#menu-button");
const skillsCardsOne = document.querySelector("#skills-cards-1");
const skillsCardsTwo = document.querySelector("#skills-cards-2");
const cardContainer = document.querySelector("#card-container");
const lightDarkBtn = document.querySelector(".light-mode-icon");
const body = document.querySelector("body");
const navbar = document.querySelector("nav");


/*----------------------------- Event Listeners -----------------------------*/

lightDarkBtn.addEventListener("click", toggleLightDark);

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
  skillsCardsOne.innerHTML = "";
  skillsCardsTwo.innerHTML = "";
  for (let i = 0; i < skillsData.length; i++) {
    const skillCard = document.createElement("div");
    skillCard.classList.add("col-lg-4", "mt-3", "d-flex", "justify-content-center");
    skillCard.innerHTML =
    `<div>
      <img src="/assets/icons/${skillsData[i]}.svg" alt="${skillsData[i]} icon"
      class="skill-icon default-card">
    </div>`;
    if (skillsCardsOne.childNodes.length < 3) {
      skillsCardsOne.appendChild(skillCard);
    }
    else {
      skillsCardsTwo.appendChild(skillCard);
    }
  }
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

  const ghImgEl = document.querySelector(".gh-logo");
  if (ghImgEl.src.match("/assets/icons/gh.svg")) {
    ghImgEl.src = "./assets/icons/gh_invert.png";
  }
  else {
    ghImgEl.src = "./assets/icons/gh.svg";
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

// function appendProject(project) {
//   const projCard = document.createElement("div");
//   projCard.classList.add("col-lg-4", "mt-4");
//   projCard.innerHTML =
//   `<div class="card text-center">
//     <img src="${project.image}" class="card-img-top" alt="screensshot of ${project.title}">
//     <div class="card-body">
//       <h1 class="card-title">${project.title}</h1>
//       <p class="card-text">${project.description}</p>
//       <a href=${project.deployment} class="btn btn-primary">See Live</a>
//       <a href=${project.github} class="btn btn-secondary">GitHub Repo</a>
//     </div>
//   </div>`;
//   cardContainer.append(projCard);