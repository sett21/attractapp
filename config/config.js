var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    apiPath: "/v1/api",
    adminPath: "/admin",
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
    db: 'mongodb://sett21:sett280287@ds023480.mlab.com:23480/attract_test'
  }
};

module.exports = config[env];
