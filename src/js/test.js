import findBy from './app';

const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  { name: 'маг', type: 'attack', description: 'Персонаж для подготовки блицкрига' },
];

test('Undefined value', () => {
  const finder = findBy('name', 'Мечник');
  const expected = [];
  expect(results.filter(finder)).toEqual(expected);
});

test('Search', () => {
  const finder = findBy('type', 'attack');
  const expected = [
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'маг', type: 'attack', description: 'Персонаж для подготовки блицкрига' },
  ];
  expect(results.filter(finder)).toEqual(expected);
});
