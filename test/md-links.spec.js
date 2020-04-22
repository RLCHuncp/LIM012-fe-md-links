const { suma } = require('../src/md-links');

describe('Operaciones matemáticas', () => {
  test('Realizamos la suma', () => {
    expect(suma(1, 1)).toBe(2);
  });
});
