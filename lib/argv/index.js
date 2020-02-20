const yargs = require('yargs');
const colors = require('colors/safe');
const { README_URL } = require('@helpers/endpoints');

const { argv } = yargs
  .scriptName('cryptoprice')
  .strict()
  .usage(`
    ${colors.yellow('Infos:')} ${colors.black.bgWhite(' $0 [-v] [-h] ')}
  `)
  .usage(`
    ${colors.yellow('Store API key:')} ${colors.black.bgWhite(' $0 store-api-key [key] ')}
  `)
  .usage(`
    ${colors.yellow('Fetch prices:')} ${colors.black.bgWhite(' $0 fetch [-t <args>] [-c <args>] ')}
  `)
  .example('$0 store-api-key dummykey123', '\'dummykey123\' will be stored in your local machine .env.')
  .example('$0 fetch -t btc eth dgx -c idr', 'show prices for BTC, ETH and DGX in IDR currency.')
  .epilogue(`README: ${README_URL}`)
  .command('store-api-key [key]', 'to store API key in your local machine .env.', (y) => {
    y
      .positional('key', {
        describe: 'this API key will be stored in your local machine .env (<global_node_modules>/cryptoprice/.env).'
        + ' You only need to do this setup process once as the API key will be reusable for future use.'
        + ` For more info on how to get the API key, follow the instructions on: ${README_URL}`,
        type: 'string',
      })
      .demandOption(['key']);
  })
  .command('fetch', 'to fetch token prices in selected currency.', (y) => {
    y
      .option('t', {
        alias: 'tokens',
        describe: 'accept multiple token symbols',
        type: 'array',
        default: ['btc', 'eth', 'dgx'],
      })
      .option('c', {
        alias: 'currency',
        describe: 'accept single currency symbol',
        type: 'string',
        nargs: 1,
        default: 'usd',
      });
  })
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version');

module.exports = argv;