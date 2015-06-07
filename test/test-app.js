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

  it('creates files', function() {
    assert.noFile([]);
  });
});
