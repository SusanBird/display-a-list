import { disneyArr } from './disney-data.js';

export function renderDisney(disneyObject) {
    
    const disneyEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const releaseDateEl = document.createElement('p');
    const financesEl = document.createElement('p');

    disneyEl.classList.add('disney');

    titleEl.textContent = disneyObject.title;
    releaseDateEl.textContent = `released on: ${disneyObject.title}`;
    financesEl.textContent = `finances: ${disneyObject.financesEl}`;

    disneyEl.append(titleEl, releaseDateEl, financesEl);

    return disneyEl;
}