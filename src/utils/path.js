const path = require('path');
const fs = require('fs');
// 1. CONVERTIR RUTA RELATIVA EN ABSOLUTA Y DEVOLVER STRING
// VERIFICAR SI LA RUTA ES ABSOLUTA CASO CONTRARIO APLICAR RESOLVE PARA CONVERTIR A RUTA ABSOLUTA
const isAbsolutePath = (route) => {
  if (!path.isAbsolute(route)) {
    return path.resolve(route);
  }
  return route;
};
// 2. VERIFICAR SI ES UN ARCHIVO
const checkFile = (route) => {
  const stats = fs.lstatSync(route);
  const isFile = stats.isFile();
  return isFile;
};
// 2.1 VERIFICAR SI ES UN DIRECTORIO
// const checkDirectory = (route) => fs.statSync(route).isDirectory();
// console.log(checkDirectory('test/file-test/Readme.md'));
// 3. SI ES DIRECTORIO, LISTAR A TODO LOS ARCHIVOS
const showAllFiles = (route) => {
  let arrFiles = [];
  if (checkFile(route)) {
    arrFiles.push(route);
  } else {
    const readDirectory = fs.readdirSync(route);
    readDirectory.forEach((file) => {
      const pathFile = path.join(route, file);
      arrFiles = arrFiles.concat(showAllFiles(pathFile));
    });
  }
  return arrFiles;
};
// getPathDirectory('test/file-test/');
// const cwd = process.cwd();
// console.log(showAllFiles(path.join(cwd, 'test/file-test')));

// 4. FILTRAR TODO LOS ARCHIVOS CON EXTENSIÓN .MD
const searchFileMd = (files) => path.extname(files);
const filterFileMd = (route) => {
  let arrFiles = [];
  const routeFile = isAbsolutePath(route);
  if (checkFile(routeFile)) {
    if (searchFileMd(routeFile) === '.md') {
      arrFiles.push(routeFile);
    }
  } else {
    const readDirectory = fs.readdirSync(route);
    readDirectory.forEach((file) => {
      const pathFile = path.join(route, file);
      arrFiles = arrFiles.concat(filterFileMd(pathFile));
    });
  }
  return arrFiles;
};
// console.log(filterFileMd('test/file-test'));

module.exports = {
  isAbsolutePath,
  checkFile,
  showAllFiles,
  filterFileMd,
};
