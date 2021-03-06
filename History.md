## v0.1.7 - August 30, 2013

 * Template: add 'log errors' to production.
 * Log errors.

## v0.1.6 - August 28, 2013

 * Add `peerDependencies` to the NPM packages.
 * Template: create a `Procfile` for Heroku.

## v0.1.5 - June 6, 2013

 * New `throw errors` setting -- when set to true, 500 error pages will not 
 show.

 * Source map support via the `source-map-support` package, enabled by default.

## v0.1.4 - June 17, 2013

Expo:

   * Console: it now triggers the 'console' event allowing you to hook things, 
   allowing you to hook

   * App: implement `app.loadConsole()`. This allows you to run `app = 
   require('app').loadConsole()` in any REPL shell (like `coffee`).

   * There's now a default `uncaughtException` handler to terminate the 
   application when one happens.

Template:

   * The `package.json` now gives you the command `npm run autotest` to 
   continuously run tests.

## v0.1.3 - June 13, 2013

Expo:

 * Config: allow 'default' configuration scope.
 * CLI: improve `expo --help` help text.
 * Add support for 404 and 500 error handlers.
 * Log timestamps in production mode.
 * Template: consolidate sessions into the main initializer.
 * App: add `add.emit()` function.

## v0.1.2 - May 30, 2013

App generator:

 * New projects now have a `repository` in package.json.
 * New projects now default to version "0.0.1".
 * Fix the default tasks.
 * Fix the 'npm install' error.
 * Automatically gitignore compiled assets.
 * Move test packages into devDependencies.
 * Remove pg/mysql by default.

Expo:

 * CLI tasks that aren't returning JS code are now ignored.

## v0.1.1 - May 30, 2013

Initial feature-complete release.
