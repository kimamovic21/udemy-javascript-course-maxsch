// 234. "this" and Arrow Functions

const members = {
    teamName: 'Blue Rockets',
    people: ['Max', 'Manuel'],
    getTeamMembers() {
        this.people.forEach((player) => {
            console.log(this);
            console.log(player + ' - ' + this.teamName);
        });
    },
};
members.getTeamMembers();


const members2 = {
    teamName: 'Blue Rockets',
    people: ['Max', 'Manuel'],
    getTeamMembers() {
        this.people.forEach(function(player) {
            console.log(this);
            console.log(player + ' - ' + this.teamName);
        });
    },
};
members2.getTeamMembers();