const webpack = require('webpack');

module.exports = env => {
  const dev = env ? env.dev : false;
  return {
    entry: {
      app: dev ? [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './scripts/app.js'
      ] : [
        './scripts/app.js'
      ],
      main: './scripts/main.js'
    },

    output: {
      publicPath: env ? env.publicPath : '',
      path: `${__dirname}/public`,
      filename: 'js/[name].js'
    },
    context: `${__dirname}/client`,
    devtool: dev ? 'inline-source-map' : 'hidden-source-map',

    module: {
      rules: [{
        test: /\.js$/,
        loaders: [{
          loader: 'babel-loader',
          query: {
            presets: [['es2015', { modules: false }], 'stage-2', 'react'],
            plugins: dev ? ['react-hot-loader/babel'] : undefined
          }
        }],
        exclude: /node_modules/
      }]
    },

    plugins: dev ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ] : [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }, output: { comments: false }, sourceMap: true
      })
    ]
  };
};
