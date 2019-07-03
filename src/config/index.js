'use strict';

var env = process.env.NODE_ENV || 'development';
var config = require(`./env/${env}`)
module.exports = config;