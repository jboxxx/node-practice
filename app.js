/**
 * Modules/Dependencies
 * ===================
**/
import path from 'path';
import logger       from 'morgan';
import express      from 'express';
import bodyParser   from 'body-parser';
import favicon      from 'serve-favicon';
import cookieParser from 'cookie-parser';
import livereload   from 'connect-livereload';

import routes from './routes/index';
import users from './routes/users';

const app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./views'));
app.use(livereload({ port: '35729' }));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
