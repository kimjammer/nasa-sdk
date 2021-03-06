'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = cad;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cad() {
  function validateClass(className) {
    var validClasses = ['IEO', 'ATE', 'APO', 'AMO', 'MCA', 'IMB', 'MBA', 'OMB', 'TJN', 'CEN', 'TNO', 'PAA', 'HYA', 'HYP', 'PAR', 'COM', 'JFC', 'HTC', 'ETc', 'CTc', 'JFc'];
    return validClasses.indexOf(className) === -1;
  }

  function validateBody(body) {
    var validBodies = ['merc', 'venus', 'earth', 'mars', 'juptr', 'satrn', 'urnus', 'neptn', 'pluto', 'moon'];
    return validBodies.indexOf(body.toLowerCase()) === -1;
  }

  return {

    fetch: function fetch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        var optionOverrides = {};
        if (options.hasOwnProperty('date-min')) {
          if (!(0, _util.validateDate)(options['date-min']) && !(0, _util.validateDateTime)(options['date-min'])) {
            if (options['date-min'] !== 'now') {
              return reject(new Error('date-min is not in a valid format.'));
            }
          }
        }
        if (options.hasOwnProperty('date-max')) {
          if (!(0, _util.validateDate)(options['date-max']) && !(0, _util.validateDateTime)(options['date-max'])) {
            if (options['date-max'].match(/^[+]\d+$/)) {
              optionOverrides['date-max'] = options['date-max'].replace(/[+]/, '%2B');
            } else if (options['date-max'] !== 'now') {
              return reject(new Error('date-max is not in a valid format.'));
            }
          }
        }
        if (options.hasOwnProperty('class')) {
          if (!validateClass(options.class)) return reject(new Error('Invalid class value'));
        }
        if (options.hasOwnProperty('body')) {
          if (!validateBody(options.body)) return reject(new Error('Invalid body value'));
        }
        return (0, _util.sendRequest)('ssd-api.jpl.nasa.gov', '/cad.api', (0, _assign2.default)({}, options, optionOverrides), resolve, reject, _util.handleResult, true);
      });
    }

  };
}
module.exports = exports['default'];