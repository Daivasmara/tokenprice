#!/usr/bin/env node
require('module-alias/register');
require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');
const colors = require('colors/safe');
const argv = require('@lib/argv');
const { BASE_URL } = require('@helpers/endpoints');

console.log(argv);
if (argv._.includes('set_api_key')) {
  console.log('kontol');
}
