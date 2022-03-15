export function renderCandy(candyObject) {
    // <div class="candy" style="background: pink">
    // <h3>Snickers</h3>
    // <img src='assets/snickers.png'>
    // <p>Color: brown</p>
    // <p>Description: candy bar with chocolate, carmel, and peanuts</p>
    
    const candyEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const colorEl = document.createElement('p');
    const descriptionEl = document.createElement('p');

    candyEl.classList.add('candy');

    return candyEl;
}