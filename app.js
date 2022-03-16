// import functions and grab DOM elements
import { candyArr } from './candies-data.js';
import { renderCandy } from './render-candy.js';

// initialize global state
const candyListEl = document.querySelector('.candies-list');


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let candy of candyArr) {
    const candyEl = renderCandy(candy);

    candyListEl.append(candyEl);
}


import { disneyArr } from './disney-data.js';
import { renderDisney } from './render-disney.js';

const disneyListEl = document.querySelector('.disney-list');

for (let disney of disneyArr) {
    const disneyEl = renderDisney(disney);

    disneyListEl.append(disneyEl);
}


import { bobsledArr } from './bobsled-data.js';
import { renderBobsledEl } from './render-bobsled.js';

const bobsledListEl = document.querySelector('.bobsled-list');

for (let bobsled of bobsledArr) {
    const bobsledEl = renderBobsledEl(bobsled);

    bobsledListEl.append(bobsledEl);
}

import { citiesArr } from './city-data.js';
import { renderCityEl } from './render-city.js';

const cityListEl = document.querySelector('.cities-list');

for (let city of citiesArr) {
    const cityEl = renderCityEl(city);

    cityListEl.append(cityEl);
}