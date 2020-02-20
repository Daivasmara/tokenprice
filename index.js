#!/usr/bin/env node
require('module-alias/register');
require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');
const colors = require('colors/safe');
const argv = require('@lib/argv');
const { BASE_URL, README_URL } = require('@helpers/endpoints');
const { CRYPTOPRICE, COMMANDS: { STORE_API_KEY, FETCH } } = require('@utils/constants');

const { env: { API_KEY } } = process;

if (argv._[0] === STORE_API_KEY) {
  try {
    fs.writeFile('.env', `API_KEY=${argv.key}`, (err) => {
      if (err) throw err;
      console.log(`
        ${colors.green('SUCCESS')}: API key is now successfully stored on your local machine .env.
      `);
    });
  } catch (err) {
    console.log(`${colors.red('ERROR')}: ${err.message}`);
  }
}

if (argv._[0] === FETCH) {
  if (!API_KEY) {
    console.log(`
      ${colors.red('ERROR')}: You need to store API key in your local machine .env in order to fetch token prices.

      For more info on this: ${colors.black.bgWhite(` ${CRYPTOPRICE} --help `)}
    `);
    process.exit(1);
  }

  const ids = argv.t.join(',').toUpperCase();
  const curr = argv.c.toUpperCase();

  const API_URL = `${BASE_URL}?key=${API_KEY}&ids=${ids}&interval=1d&convert=${curr}`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((prices) => {
      if (prices.length === 0) {
        console.log(colors.red(`No prices found for ${colors.red.underline.bold(ids)}`));
        return;
      }
      for (let i = 0; i < prices.length; i += 1) {
        const { symbol, name, price } = prices[i];
        const moneyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: curr }).format(price);
        console.log(`${colors.yellow.bold(`${name} (${symbol}):`)} ${colors.bold(moneyFormat)}`);
      }
    })
    .catch((err) => console.log(`
      ${colors.red('ERROR')}: Failed to fetch price(s). 

      ${err.message}

      For more info on this: ${colors.black.bgWhite(` ${CRYPTOPRICE} --help `)}
    `));
}
