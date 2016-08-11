'use strict';

var destroy = require('./plugin/destroy');
var initialize = require('./plugin/initialize');
var update = require('./plugin/update');
var setEnabled = require('./plugin/set-enabled');

module.exports = {
  initialize: initialize,
  update: update,
  destroy: destroy,
  setEnabled: setEnabled
};
