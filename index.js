var expo = module.exports = function(app, dir) {
  // Use coffeescript right away to allow .coffee files
  require('coffee-script');
  // Use source maps
  require('source-map-support').install();

  require('./lib/app')(app);
  app.root = dir;
  return app;
};

/**
 * Middleware proxy to express.errorHandler, but let 404 errors through.
 *
 *     app.use(app.errorHandler(express.errorHandler()));
 */

expo.errorHandler = function(handler) {
  return function(err, req, res, next) {
    if (err === 404) return next(404);
    handler(err, req, res, next);
  };
};

/**
 * Middleware for logging errors to STDERR.
 * This is activated when using `app.set('log errors', true);`.
 */

expo.errorLogger = function(err, req, res, next) {
  if (err === 404) return next(err);

  var addr = req.socket && (req.socket.remoteAddress || (req.socket.socket && req.socket.socket.remoteAddress));
  var ver  = req.httpVersionMajor + '.' + req.httpVersionMinor;

  console.error("");
  console.error("ERROR:");
  console.error("    ", req.method, req.url, "HTTP/"+ver, "-", res.statusCode);
  console.error("    ", "Remote-IP:", addr);
  console.error("    ", "Date:", (new Date()).toUTCString());

  // Make connect show the errors
  next(err);
};
