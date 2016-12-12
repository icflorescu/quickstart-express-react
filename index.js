const target = process.argv[2];

global.Promise = require('bluebird');
require('babel-core/register')({ presets: ['latest-minimal'] });
require(target ? `./tools/${target}` : './app');
