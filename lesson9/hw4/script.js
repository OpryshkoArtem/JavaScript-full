const getPeople = obj =>
  Object.entries(obj)
    .map(el => Object.values(el[1]))
    .flat()
    .map(name => Object.values(name))
    .flat();

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

console.log(getPeople(rooms));
