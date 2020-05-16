const fs = require('fs');
const chalk = require('chalk');
const { validateLinks } = require('./validate');
const { extractLinks } = require('./link');
const { isAbsolutePath } = require('./path');

const mdLinks = (route, options) => {
  const promise = new Promise((resolve, reject) => {
    // Primero tenemos que verificar que tiene  que ser una ruta absoluta
    const verifiedRoute = isAbsolutePath(route);
    if (fs.existsSync(verifiedRoute) === false) {
      reject(new Error(`${chalk.redBright('RUTA INVÁLIDA')}`));
    } else {
      if (options.validate) { resolve(validateLinks(extractLinks(verifiedRoute))); }

      if (!options.validate) { resolve(extractLinks(verifiedRoute)); }
    }
  });
  return promise;
};

// mdLinks('C:\\Users\\LUCY\\Desktop\\LIM012-fe-md-links\\test\\file-test\\README.md', { validate: true }).then((ele) => console.log(ele));
module.exports = { mdLinks };
