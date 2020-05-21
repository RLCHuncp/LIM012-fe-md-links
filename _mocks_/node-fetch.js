const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock
  .mock('https://www.flaticon.es/', 200)
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://www.flaticonddd.es/', { throws: new Error('No existe') });

module.exports = { fetchMock };
