#!/usr/bin/env node

const { optionsCli } = require('./options');

const path = process.argv[2];
const [,,, ...option] = process.argv;
const options = option.join(' ');

optionsCli(path, options)
  .then((response) => {
    console.log(response);
  })
  .catch(() => console.log('ERROR:', 'Revise la documentación'));
