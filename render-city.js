export function renderCityEl(cityObject) {
    const cityEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const stateEl = document.createElement('h2');
    const populationEl = document.createElement('p');
   

    cityEl.classList.add('city');

    nameEl.textContent = cityObject.name;    
    stateEl.textContent = `state in ${cityObject.year}`;
    populationEl.textContent = `By ${cityObject.size.name}, born ${cityObject.size.birth}`;

    for (let race of cityObject.races) {
        // make and append an li
        const raceEl = document.createElement('li');
        raceEl.textContent = race;

        populationEl.append(raceEl);
    }

    cityEl.append(nameEl, stateEl, populationEl);

    return cityEl;
}