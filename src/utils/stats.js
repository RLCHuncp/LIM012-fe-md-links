
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
// const stats = (links) => {
//   const href = links.map((ele) => ele.href);
//   const uniqueLinks = new Set(href);
//   return {
//     total: links.length,
//     unique: uniqueLinks.size,
//   };
// };
// 8. AGREGANDO CUÁNTOS LINKS ROTOS HAY --> O=TOTAL:3 UNIQUE:3 BROKEN:1
// const statsAndValidate = (arrlink) => {
//   const brokenLinks = arrlink.filter((ele) => ele.status === 404);
//   const statsA = `
//   ${stats(arrlink)},
//   ${'broken'}: ${brokenLinks.length},
//   `;
//   return statsA;
// };
// module.exports = {
//   stats,
//   statsAndValidate,
// };
