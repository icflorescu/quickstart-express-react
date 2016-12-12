import { relative as relativePath } from 'path';
import { create as createBrowserSync } from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import nodemon from 'nodemon';

import appConfig from '../app.config';
import webpackConfig from '../webpack.config';

const publicPath = appConfig.static.root;

const bs = createBrowserSync();
const wp = webpack(webpackConfig({ dev: true, publicPath }));

bs.watch(['views', 'public']).on('change', bs.reload);

bs.init({
  proxy: `${appConfig.host}:${appConfig.port}`,
  open: false, online: false, notify: false,
  middleware: [
    webpackDevMiddleware(wp, { noInfo: true, publicPath }),
    webpackHotMiddleware(wp)
  ]
});

nodemon({
  script: 'index.js',
  ignore: ['client/', 'public/']
}).on('restart', files => {
  if (files) {
    const filenames = files.map(f => relativePath('', f)).join(', ');
    console.log(`${filenames} changed...`);
  }
  setTimeout(bs.reload, 1000);
}).on('quit', process.exit);
