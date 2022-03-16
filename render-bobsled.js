export function renderBobsledEl(bobsledObject) {
    const bobsledEl = document.createElement('div');
    const medalEl = document.createElement('h2');
    const finalTimeEl = document.createElement('p');
    const teamMemberListEl = document.createElement('ul');

    bobsledEl.classList.add('bobsled');

    medalEl.textContent = bobsledObject.medal;    
    finalTimeEl.textContent = `Final time was ${bobsledObject.finalTime}`;
    teamMemberListEl.textContent = `By ${bobsledObject.teamMembers.name}, born ${bobsledObject.teamMembers.birth}`;

    for (let teamMember of bobsledObject.teamMembers) {
        // make and append an li
        const teamMemberEl = document.createElement('li');
        teamMemberEl.textContent = teamMember;

        teamMemberListEl.append(teamMemberEl);
    }

    bobsledEl.append(medalEl, finalTimeEl, teamMemberListEl);

    return bobsledEl;
}