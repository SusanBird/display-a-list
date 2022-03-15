export function renderBobsledEl(bobsledObject) {
    const bobsledEl = document.createElement('div');
    const titleEl = document.createElement('h2');
    const publishedEl = document.createElement('p');
    const authorEl = document.createElement('p');
    const teamMemberListEl = document.createElement('ul');

    bobsledEl.classList.add('bobsled');

    titleEl.textContent = bobsledObject.title;    
    publishedEl.textContent = `Published in ${bobsledObject.year}`;
    authorEl.textContent = `By ${bobsledObject.author.name}, born ${bobsledObject.author.birth}`;

    for (let teamMember of bobsledObject.teamMembers) {
        // make and append an li
        const teamMemberEl = document.createElement('li');
        teamMemberEl.textContent = teamMember;

        teamMemberListEl.append(teamMemberEl);
    }

    bobsledEl.append(titleEl, publishedEl, authorEl, teamMemberListEl);

    return bobsledEl;
}