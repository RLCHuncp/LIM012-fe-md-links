
const { mdLinks } = require('./index');
// 7. MOSTRAR ESTADÍSTICAS I=HREF,TEXT,FILE O=TOTAL:3 UNIQUE:3
const stats = (path) => mdLinks(path, { validate: true })
  .then((dataReturn) => {
    const arrayOfFailLinks = dataReturn.filter((linkObject) => linkObject.statusText === 'Fail');
    const arrayHref = [];
    dataReturn.forEach((linkObject) => arrayHref.push(linkObject.href));
    const arrayHrefUniques = new Set(arrayHref);
    const answerObject = {
      total: arrayHref.length,
      unique: arrayHrefUniques.size,
      broken: arrayOfFailLinks.length,
    };
    return answerObject;
  });

module.exports = { stats };
