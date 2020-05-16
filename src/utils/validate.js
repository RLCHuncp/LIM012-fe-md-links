/* eslint-disable no-param-reassign */
// 6. VALIDAR LOS LINKS I=HREF, TEXT, FILE O=HREF,TEXT,FILE,STATUS,STATUSTEXT
const fetch = require('node-fetch');
const chalk = require('chalk');

const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((ele) => new Promise((resolve) => fetch(ele.href)
    .then((res) => {
      if (res.status >= 200 && res.status < 400) {
        ele.status = res.status;
        ele.statusText = chalk.green.inverse('OK');
        resolve(ele);
      } else {
        ele.status = res.status;
        ele.statusText = chalk.bgRed('Fail');
        resolve(ele);
      }
    })
    .catch(() => {
      ele.status = '';
      ele.statusText = 'Este link no existe';
      resolve(ele);
    })));
  return Promise.all(arrPromises);
};

module.exports = {
  validateLinks,
};
