// 5. EXTRAER LINKS
const fs = require('fs');
const marked = require('marked');

const renderer = new marked.Renderer();

const extractLinks = (route) => {
  const readMarkDown = fs.readFileSync(route).toString();
  const arr = [];

  renderer.link = (href, path, text) => arr.push({
    href,
    text,
    path: route,
  });
  marked(readMarkDown, { renderer });
  return arr;
};
// CONSOLE PARA PROBAR SI FUNCIONA
// const path = require('path');

// const cwd = process.cwd();
// console.log(extractLinks(path.join(cwd, 'test', 'file-test', 'fichero2.md')));


module.exports = {
  extractLinks,
};
