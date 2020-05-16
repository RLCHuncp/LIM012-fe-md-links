const path = require('path');

const cwd = process.cwd();
const {
  isAbsolutePath, checkFile, showAllFiles, filterFileMd,
} = require('../src/utils/path');

// CONVERTIR RUTA RELATIVA EN RUTA ABSOLUTA
const rutaRelativa = '.';
const rutaAbsoluta = 'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links';
describe('FUNCIÓN ISABSOLUTEPATH', () => {
  it('Debería ser una función', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('Debería convertir ruta relativa a ruta absoluta', () => {
    expect(isAbsolutePath(rutaRelativa)).toEqual(rutaAbsoluta);
  });
  it('Debería retornar ruta absoluta ', () => {
    expect(isAbsolutePath(rutaAbsoluta)).toEqual('C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links');
  });
});
// COMPROBAR SI LA RUTA ES UN ARCHIVO
// const input = '';
describe('FUNCIÓN VER SOLO ARCHIVOS', () => {
  it('Debería ser una función', () => {
    expect(typeof checkFile).toBe('function');
  });
  it('Debería retornar true si es un archivo', () => {
    expect(checkFile('C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md')).toBe(true);
  });
});
describe('FUNCIÓN MOSTRAR TODO LOS ARCHIVOS', () => {
  it('Debería ser una función', () => {
    expect(typeof showAllFiles).toBe('function');
  });
  it('Debería retornar true si es un archivo', () => {
    const outputFiles = [
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\fichero2.md',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\sub-file\\prueba.js',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\sub-file\\sub-sub-file\\fichero3.md',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\sub-file\\sub-sub-file\\fichero4.md',
    ];
    expect(showAllFiles(path.join(cwd, 'test/file-test'))).toEqual(outputFiles);
  });
});
describe('FUNCIÓN FILTRAR TODO LOS ARCHIVOS CON EXTENSIÓN .MD', () => {
  it('Debería ser una función', () => {
    expect(typeof filterFileMd).toBe('function');
  });
  it('Debería retornar true si es un archivo con extensión .md', () => {
    const arrFilterMd = [
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\fichero2.md',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\sub-file\\sub-sub-file\\fichero3.md',
      'C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\sub-file\\sub-sub-file\\fichero4.md',
    ];
    expect(filterFileMd('test/file-test')).toEqual(arrFilterMd);
  });
});
