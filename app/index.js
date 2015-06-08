'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-welcome-message', {
      desc: 'Skip welcome message',
      type: Boolean,
      defaults: false
    });
    this.skipWelcome = this.options['skip-welcome-message'];
  },
  
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the smashing ' + chalk.red('Foundation') + ' generator!'
    ));
    var prompts = [{
      type: 'confirm',
      name: 'createTeplateProject',
      message: 'Would you like to create example project?',
      default: true
    }];
    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    project: function () {
      if(this.props.createTeplateProject) {
        this.fs.copy(
          this.templatePath('.*'),
          this.destinationPath('/')
        );
        this.fs.copy(
          this.templatePath('**.*'),
          this.destinationPath('/')
        );
        this.fs.copy(
          this.templatePath('js/**.*'),
          this.destinationPath('js/')
        );
        this.fs.copy(
          this.templatePath('scss/**.*'),
          this.destinationPath('scss/')
        );
      }
    }
  }
  
});
