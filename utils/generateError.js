const colors = require('colors/safe');
const { README_URL } = require('@helpers/endpoints');

const generateError = (error) => console.log(`
    ${colors.red('ERROR')}: ${error}
    e.g: ${colors.black.bgWhite(' cekharga SET_API_KEY dummykey123 ')}
    
    ${colors.yellow('NOTE')}: THIS API KEY WILL ONLY BE STORED ON YOUR LOCAL.

    You only need to do this setup once. The API key will be saved in your local for future use.
    More info on setting up API key: ${colors.underline(README_URL)}
`);

module.exports = generateError;
