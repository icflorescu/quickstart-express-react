const gulp         = require('gulp');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const sourcemaps   = require('gulp-sourcemaps');

const run = (cb, production) => {
  gulp
    .src('client/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(
      production
        ? [autoprefixer(), cssnano({ discardComments: { removeAll: true } })]
        : [autoprefixer()]
    ))
    .pipe(
      production
        ? sourcemaps.write('./', { addComment: false })
        : sourcemaps.write()
    )
    .pipe(gulp.dest('public/css'));
  if (typeof cb == 'function') cb();
};

gulp.task('scss:build', cb => {
  run(cb, true);
});

gulp.task('scss:watch', () => {
  run();
  return gulp.watch('client/styles/*.scss', run);
});
