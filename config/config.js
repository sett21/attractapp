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
    apiPath: "/v1/api",
    adminPath: "/admin",
    app: {
      name: 'attractapp'
    },
    port: process.env.PORT || 5000,
    db: 'mongodb://heroku_jx2wxdw5@ds023540.mlab.com:23540/heroku_jx2wxdw5'
  }
};

module.exports = config[env];
