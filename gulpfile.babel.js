/**
 * Modules/Dependencies
 * ===================
**/
import gulp from 'gulp';
import config from './config/gulp.js';
import gulpLoadPlugins from 'gulp-load-plugins';

let pluginConfig = {
  pattern: [ 'gulp-*', 'gulp.*' ],
  replaceString: /\bgulp[ \-. ]/,
  lazy: false,
  camelize: true
};
const $ = gulpLoadPlugins(pluginConfig);

/**
 * Subtasks
 * ========
**/
gulp.task('serve', () => {

  // Run server on port 3000
  console.log('Server listening on port 3000');
  let server = $.liveServer.new([ config.serve.app ]);
  server.start();
  // Restart server on .js file change
  gulp.watch(
    [ config.scripts ],
    [ 'eslint', 'babelify', server.start.bind(server) ]
  );

});

// ES6/JS Tasks
// ------------
gulp.task('babelify', () => {

  return gulp.src(config.scripts)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));

});

gulp.task('eslint', () => {

  return gulp.src(config.scripts)
    .pipe($.eslint())
    .pipe($.eslint.format());

});

/**
 * Main Tasks
 * ==========
**/
gulp.task('dev',
  [
    'eslint',
    'babelify',
    'serve'
  ]
);
