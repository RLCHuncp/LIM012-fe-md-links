const { mdLinks } = require('./index');
// 7. MOSTRAR ESTADÍSTICAS I=HREF,TEXT,FILE O=TOTAL:3 UNIQUE:3
const stats = (path) => mdLinks(path, { validate: true })
  .then((data) => {
    const arrayOfFailLinks = data.filter((linkObject) => linkObject.statusText === 'Fail');
    const newArrayHref = [];
    data.forEach((linkObject) => newArrayHref.push(linkObject.href));
    const arrayHrefUniques = new Set(newArrayHref);
    const answerObject = {
      total: newArrayHref.length,
      unique: arrayHrefUniques.size,
      broken: arrayOfFailLinks.length,
    };
    return answerObject;
  });

module.exports = { stats };
