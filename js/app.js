/*-------------------------------- Constants --------------------------------*/

import {projectData, skillsData} from "../data/data.js";


/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const menuBtnEl = document.querySelector("#menu-button");
const cardContainer = document.querySelector("#card-container");


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  render();
}

function render() {
  cardContainer.innerHTML = "";
  projectData.forEach((project) => appendProject(project));
}

function appendProject(project) {
  const projCard = document.createElement("div");
  projCard.innerHTML =
  `<div class="card" style="width: 18rem;">
    <img src=${project.image} class="card-img-top" alt="screensshot of ${project.title}">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <a href="${project.deployment}" class="btn btn-primary">See Live</a>
      <a href="${project.github}" class="btn btn-secondary">GitHub Repo</a>
    </div>
  </div>`
  cardContainer.append(projCard);
}