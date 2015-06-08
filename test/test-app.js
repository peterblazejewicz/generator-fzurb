'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('fzurb:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        skipInstall: true
      })
      .on('end', done);
  });

  it('creates project files', function() {
    assert.file([
      '.bowerrc',
      '.gitignore',
      'bower.json',
      'Gruntfile.js',
      'humans.txt',
      'index.html',
      'js/app.js',
      'package.json',
      'README.md',
      'robots.txt',
      'scss/_settings.scss',
      'scss/app.scss'
    ]);
  });
});
