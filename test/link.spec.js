const path = require('path');
const { extractLinks } = require('../src/utils/link.js');

const cwd = process.cwd();


const route = path.join(cwd, 'test', 'file-test', 'README.md');
const outputArr = [
  {
    href: 'https://www.flaticon.es/',
    text: 'Este es el link',
    path: 'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md',
  },
  {
    href: 'https://lms.laboaaaaaratoria.l/',
    text: 'Este es el link no existe',
    path: 'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md',
  },
  {
    href: 'https://nodejs.org/es/123456789',
    text: '404',
    path: 'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md',
  },
];
describe('FUNCIÓN HREF, TEXT, PATH DE .MD', () => {
  it('Debería ser una función', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('Debería devolver un array de objetos', () => {
    expect(extractLinks(route)).toEqual(outputArr);
  });
});
