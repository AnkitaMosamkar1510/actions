const { add, subtract } = require('../index');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 22', () => {
  expect(subtract(5, 3)).toBe(2);
});
