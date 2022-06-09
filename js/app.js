/*-------------------------------- Constants --------------------------------*/

import {projectData, skillsData} from "../data/data.js";


/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const menuBtnEl = document.querySelector("#menu-button");
const skillsCardsOne = document.querySelector("#skills-cards-1");
const skillsCardsTwo = document.querySelector("#skills-cards-2");
const cardContainer = document.querySelector("#card-container");


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

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
    <img src="${project.image}" class="card-img-top" alt="screensshot of ${project.title}">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <a href=${project.deployment} class="btn btn-primary">See Live</a>
      <a href=${project.github} class="btn btn-secondary">GitHub Repo</a>
    </div>
  </div>`;
  cardContainer.append(projCard);
}