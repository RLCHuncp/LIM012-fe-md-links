const { stats } = require('../src/utils/stats');

const arrInput = [
  { file: 'C:\\Users\\LUCY\\Desktop\\src\\README.md', href: 'www.abc.com', text: 'Visita este sitio' },
  { file: 'C:\\Users\\LUCY\\Desktop\\src\\README.md', href: 'www.abc.com', text: 'Visita este sitio' },
  { file: 'C:\\Users\\LUCY\\Desktop\\src\\README.md', href: 'www.google.com', text: 'Entra a Google' },
  { file: 'C:\\Users\\LUCY\\Desktop\\src\\README.md', href: 'www.facebook.com', text: 'Entra a Facebook' },
  { file: 'C:\\Users\\LUCY\\Desktop\\src\\README.md', href: 'www.linkedin.com', text: 'Entra a LinkedIn' },
];

const res = {
  total: 5,
  unique: 4,
};

describe('stats', () => {
  it('Debería ser una función', () => {
    expect(typeof stats).toBe('function');
  });
  it('Debería retornar un string con el total de links únicos', () => {
    expect(stats(arrInput)).toEqual(res);
  });
});
