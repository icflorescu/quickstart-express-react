const version    = require('./package').version;
const production = process.env.NODE_ENV == 'production';

module.exports = {
  production,
  host: 'localhost', // production ? 'www.awesome-website.io' : 'localhost'
  port: 8080, // production ? 80 : 8080
  static: {
    root: `/static/${version}`,
    suffix: production ? '.gz' : ''
  }
};
