// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const candyEl = document.querySelector('.candies-list');

for (let candy of candies) {
    const fruitEl = renderCandy(candy);

    candyEl.append(fruitEl);
}