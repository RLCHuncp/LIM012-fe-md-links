const { mdLinks } = require('./utils/index');
const { stats } = require('./utils/stats');

const optionsCli = (path, options) => {
  if (options === '--validate' || options === '--v') {
    return mdLinks(path, { validate: true })
      .then((data) => {
        let string = '';
        data.forEach((ele) => {
          string += `${ele.href} ${ele.text} ${ele.path} ${ele.status} ${ele.statusText}\n`;
        });
        return string;
      });
  }
  if (options === '--stats' || options === '--s') {
    return stats(path)
      .then((data) => `TOTAL: ${data.total}\nUNIQUE: ${data.unique}`);
  }
  if (options === '--stats --validate' || options === '--s --v') {
    return stats(path)
      .then((data) => `TOTAL: ${data.total}\nUNIQUE: ${data.unique}\nBROKEN: ${data.broken}`);
  }
  return mdLinks(path, { validate: false })
    .then((data) => {
      let string = '';
      data.forEach((ele) => {
        string += `${ele.href} ${ele.text} ${ele.path}`;
      });
      return string;
    });
};
module.exports = { optionsCli };
