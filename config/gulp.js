export default {

  serve: {
    app: 'dist/www',
    port: 3000,
  },

  // All JS files in application
  // Excludes dependencies / transpiled JS
  scripts: [ '**/*.js', 'bin/www', '!node_modules/**/*', '!dist/**/*' ]

};
