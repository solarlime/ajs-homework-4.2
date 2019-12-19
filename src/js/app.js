const findBy = (key, value) => (item) => item[key].includes(value);

const finder = findBy('name', 'Урон');
const results = [
  { name: 'Маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'Заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'Урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder);

console.log(results);

export default findBy;
