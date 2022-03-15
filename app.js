// import functions and grab DOM elements
import { candyArr } from './candies-data.js';
import { renderCandy } from './render-candy.js';

// initialize global state
const candyEl = document.querySelector('.candies-list');


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let candy of candyArr) {
    const candyEl = renderCandy(candy);

    candyEl.append(candyEl);
}


import { disneyArr } from './disney-data.js';
import { renderDisney } from './render-disney';

const disneyListEl = document.querySelector('.disney-list');

for (let disney of disneyArr) {
    const disneyEl = renderDisney(disney);

    disneyListEl.append(disneyEl);
}