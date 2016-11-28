const relativePath = require('path').relative;
const EOL          = require('os').EOL;

const appConfig     = require('./app.config');
const webpackConfig = require('./webpack.config');

const publicPath = appConfig.static.root;

const bs = require('browser-sync').create();
const wp = require('webpack')(webpackConfig({ dev: true, publicPath }));

bs.watch(['views', 'public']).on('change', bs.reload);

bs.init({
  proxy: `${appConfig.host}:${appConfig.port}`,
  open: false, online: false, notify: false,
  middleware: [
    require('webpack-dev-middleware')(wp, { noInfo: true, publicPath }),
    require('webpack-hot-middleware')(wp)
  ]
});

require('nodemon')({
  script: 'index.js',
  ignore: ['client/', 'public/']
}).on('restart', files => {
  if (files) {
    const filenames = files.map(f => relativePath('', f)).join(', ');
    console.log(`${filenames} changed...`);
  }
  setTimeout(bs.reload, 1000);
}).on('quit', () => {
  console.log(`${EOL}Application stopped.`);
  process.exit();
});
