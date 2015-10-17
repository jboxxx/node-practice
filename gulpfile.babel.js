/**
 * Module/Dependencies
 * ===================
**/
import gulp from 'gulp';
import server from 'gulp-express';
import gls from 'gulp-live-server';
import config from './gulp/config.js';
import gulpLoadPlugins from 'gulp-load-plugins';

let pluginConfig = {
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/,
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
  server.run([config.serve.app]);
  // Restart server on .js file change
  gulp.watch([config.scripts.src], [server.run]);

});

/**
 * Main Tasks
 * ==========
**/
gulp.task('dev',
  [
    'serve'
  ]
);
