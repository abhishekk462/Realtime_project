
const oauthServer = require('oauth2-server');


const oauth = new oauthServer({
  model: require('./models.js')
});

module.exports = oauth;
