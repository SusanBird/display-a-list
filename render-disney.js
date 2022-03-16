//import { disneyArr } from './disney-data.js';

export function renderDisney(disneyObject) {
    
    const disneyEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const releaseDateEl = document.createElement('p');
    const budgetEl = document.createElement('p');
    const boxOfficeEl = document.createElement('p');

    disneyEl.classList.add('disney');

    titleEl.textContent = disneyObject.title;
    releaseDateEl.textContent = `Released on: ${disneyObject.releaseDate}`;
    budgetEl.textContent = `Budget: ${disneyObject.finances.budget}`;
    boxOfficeEl.textContent = `Box Office: ${disneyObject.finances.boxOffice}`;

    disneyEl.append(titleEl, releaseDateEl, budgetEl, boxOfficeEl);

    return disneyEl;
}