global.Promise = require('bluebird');
require('babel-core/register')({ presets: ['latest-minimal'] });
require('./app');
