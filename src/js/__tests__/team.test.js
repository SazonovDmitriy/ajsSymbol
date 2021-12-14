import Team from "../team";
import Person from "../person";

const team = new Team();

test('class Team have members', () => {
    expect(team.members).toBeDefined();
    expect(team.members instanceof Set).toBeTruthy();
});

team.members.add(new Person('person'));

test('Team iterator', () => {
    const teamIterator = () => [...team];

    expect(teamIterator).not.toThrow();
    expect(teamIterator()).toEqual([...team.members])
});


