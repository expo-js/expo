var extend = require('util')._extend;

module.exports = function(app) {
  app.on('load:after', function(app) {
    var options = {
      src: app.path('assets'),
      buildDir: 'public'
    };

    // Get config from app.get.
    if (typeof app.get('assets') === 'object') {
      extend(options, app.get('assets'));
    }

    app.use(require('connect-assets')(options));
  });

  app.on('cli', function(app, cli) {
    cli
      .command('assets:precompile')
      .description('Precompiles asset files')
      .action(function() {
        
        app.set('env', 'production'); // Not working

        app.load(function(app) {
          var packages = app.get('assets precompiled');
          if (typeof packages !== 'object') {
            console.info("Warning: 'assets precompiled' setting found, no assets to be compiled.");
            process.exit(0);
          }

          if (packages.js) {
            packages.js.forEach(function(pkg) {
              console.log('  (js) '+pkg);
              js(pkg);
            });
          }

          if (packages.css) {
            packages.css.forEach(function(pkg) {
              console.log('  (css) '+pkg);
              css(pkg);
            });
          }
        });
      });
  });
};