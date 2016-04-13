var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'attractapp'
    },
    port: 3000,
    db: 'mongodb://localhost/attractapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'attractapp'
    },
    port: 3000,
    db: 'mongodb://localhost/attractapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'attractapp'
    },
    port: 3000,
    db: 'mongodb://localhost/attractapp-production'
  }
};

module.exports = config[env];
