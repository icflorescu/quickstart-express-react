# A "real-life" Express + React application quickstart

![Express, React, BrowserSync, Webpack, Nodemon](https://cloud.githubusercontent.com/assets/581999/20681348/e629cd74-b5ab-11e6-94fa-b3b30cdbacc3.png)

Combined live/hot-reloading for Express.js and React.

## Motivation

### TL;DR

While a simple, webpack-only based development scenario is perfectly suited for building SPAs, building multipage applications or websites require a different, more elaborated approach.

### Background

While most React tutorials and quickstarts are focused exclusively on **building SPAs** (single-page applications), in real life your React application will often be running as part of a "classic" **multipage** application / website.

There's been lots of talk recently about server-side rendered React components or even about building your entire website as a client-side application. But rendering React components on the server is still unacceptably slow (as of December 2016), especially for websites that need to handle lots of traffic.

Also, we still need our **server-generated content to be available and parsable by search engines**. Admittedly, Google [became smarter](http://andrewhfarmer.com/react-seo/) in regards to interpreting and client-side generated content, but it's not safe to completely rely on it, and other search engines are not so powerful yet.

That's why we still need to generate content on the server using tried & tested, fast, specialized template engines such as [Pug](https://pugjs.org/api/getting-started.html), [EJS](http://ejs.co/), [Vash](https://github.com/kirbysayshi/vash), [Dust](http://www.dustjs.com/), etc.  

Also, the webpack-based hot-reloading solution provided by most tutorials and available quickstarts completely ignore the API your application is connecting to. But in real-life not all projects are developed by multiple teams; sometimes there's a single full-stack developer or team writing the entire codebase for an app or website, including the webpage templates, client-side JS code and server-side APIs.

Trying to use webpack **hot-reloading** for template-generated pages and API endpoints is possible to a certain degree, but it feels like trying to fit a square peg in a round hole: it requires you to structure your code in a certain way and make use of unsafe artifacts such as [`require` cache busting](http://stackoverflow.com/questions/23685930/clearing-require-cache), and it often results in [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) when applying CSS changes.

Hence the need of a functional, truly **general-purpose hot-reloading approach** integrating the best of all worlds.

## Features

- Restart / full-page reload on server-side code change using [nodemon](http://nodemon.io/) and [browsersync](https://www.browsersync.io/);
- Full-page reload on template change using [browsersync](https://www.browsersync.io/)'s watch mechanism;
- Smart HMR on client-side code change using [webpack](https://webpack.js.org/)@2.1.x;
- Seamless CSS reloading with [browsersync](https://www.browsersync.io/).

## Starting

- In development mode: `npm run dev`, then edit code and enjoy the auto-reload magic on `localhost:3000`;
- In production mode: `npm run build`, then `npm start`.

## Notes & Customizations

- For demo purposes, server-side views are generated with [Vash](https://github.com/kirbysayshi/vash) template engine, but you can use [Pug](https://pugjs.org/api/getting-started.html), [EJS](http://ejs.co/), or anything else, as long as you make the necessary amendments in `dev.js` to instruct the browser to reload when one of your views changes.
- A very simple/non-scalable JSON persistence mechanism based on [lowdb](https://github.com/typicode/lowdb) and [underscore-db](https://github.com/typicode/underscore-db) is used as a server-side "database", **for demo purposes**. Make sure to `npm uninstall -S lowdb underscore-db` and replace with an appropriate data persistence layer.
- A very simple [gulp](http://gulpjs.com/) scenario is used for the sole purpose of transforming SCSS with [node-sass](https://github.com/sass/node-sass) and applying [autoprefixer](https://github.com/postcss/autoprefixer) transformations with [sourcemaps](https://github.com/floridoo/gulp-sourcemaps) support in a single step. You can adapt it according to your own needs, or even fully replace it with a simple `npm` script if you're using [Stylus](http://stylus-lang.com/) with [autoprefixer-stylus](https://github.com/jescalan/autoprefixer-stylus) plugin or write your styles in plain CSS.
- `package.json` contains simple `npm` scripts for running in development and production mode.
- The quickstart provides a simple, yet efficient asset versioning mechanism based on `package.json` version: the static assets are served from a "virtual" root `/static/x.x.x.x`, where `x.x.x.x` is the package version. Just make sure to do an `npm version bump` as part of your deployment scenario (not provided here).
- Efficient ES6 on the server with [babel-preset-latest-minimal](https://github.com/gabmontes/babel-preset-latest-minimal) – configured in `index.js`.
- In development mode, [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) are **running as browsersync middlewares**. This way we end up **keeping the main Express application uncluttered by development-related code**.
- Webpack [babel-loader](https://github.com/babel/babel-loader) is using [stage-2](https://babeljs.io/docs/plugins/preset-stage-2/) and [react](https://babeljs.io/docs/plugins/preset-react/) presets and **[react-hot-loader](https://github.com/gaearon/react-hot-loader)@3** – configured in `webpack.config.js`.
- On the server, the `global.Promise` is replaced with [bluebird](http://bluebirdjs.com/docs/getting-started.html) for [performance reasons](http://bluebirdjs.com/docs/benchmarks.html) – this is configured in `index.js`. Simply remove it if you don't like the idea.

## Contributing

PRs are welcomed, but keep in mind this is just one of the [many quickstart alternatives](https://www.google.com/?q=react+quickstart) available in the wild, and it's not intended to cover all possible use-cases (or yours in particular).

## Before raising issues or asking for help

I'm getting lots of questions from people just learning to do web development or simply looking to solve a very specific problem they're dealing with. While I will answer some of them for the benefit of the community, please understand that open-source is a shared effort and it's definitely not about piggybacking on other people's work. On places like GitHub, that means raising issues is encouraged, but coming up with useful PRs is a lot better. If I'm willing to share some of my code for free, I'm doing it for a number of reasons: my own intellectual challenges, pride, arrogance, stubbornness to believe I'm bringing a contribution to common progress and freedom, etc. Your particular well-being is probably not one of those reasons. I'm not in the business of providing free consultancy, so if you need my help to solve your specific problem, there's a fee for that. If you understand that and wish to **employ my services**, don't hesitate to drop me a line on my GitHub email account.

## Credits

If you find this repo useful, don't hesitate to give it a star, [spread the word](http://twitter.com/share?text=Checkout%20this%20custom%20Express%2BReact%20quickstart!&amp;url=http%3A%2F%2Fgithub.com/icflorescu/quickstart-express-react&amp;hashtags=javascript,nodejs,express,react,hmr,livereload&amp;via=icflorescu) or even [endorse](https://www.linkedin.com/in/icflorescu) the author on LinkedIn.

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)-licensed by [Ionut-Cristian Florescu](https://github.com/icflorescu). Feel free to use and abuse.
