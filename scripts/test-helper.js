const constants = require('../tests/constants');
global.expect = require('expect.js');
global.fs = require('memfs');
global.path = require('path');
global.Tesseract = require('../src');

Object.keys(constants).forEach((key) => {
  global[key] = constants[key];
});
