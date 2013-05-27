require('./test_helper');

describe('Expo', function() {
  beforeEach(function() {
    this.app = expo(fixturePath('simple')).load();
  });

  describe('routes', function() {
    it('should work (/)', function(done) {
      request(this.app)
        .get('/')
        .expect(200, done);
    });
  });

  it('app.path', function() {
    var origin = path.resolve(fixturePath('simple/routes'));
    this.app.path('routes').should.equal(origin);
  });

  // TODO: test events
});