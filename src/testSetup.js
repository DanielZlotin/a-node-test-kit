require('jasmine-expect');
const appRootPath = require('app-root-path');
const proxyquireLib = require('proxyquire');
const _ = require('lodash');

module.exports = {
  requireAbsolute: (path) => {
    return appRootPath.require(path);
  },

  /**
   * mock requires and imports of the unit under test
   *
   * @param {String} path the absolute path of the uut
   * @param {Object} imports the imports to mock ex. {'lib': mockLib, 'lib2': {}}
   * @returns {*} the uut
   */
  proxyquire: (path, imports) => {
    return proxyquireLib.noCallThru().noPreserveCache()(appRootPath.resolve(path), imports);
  },

  /**
   * Wrap the function of 'it' test case. it('xxx', asyncSpec(()=> {...
   */
  asyncSpec: (fn) => {
    return async(done) => {
      try {
        await fn();
        done();
      } catch (err) {
        done.fail(err);
      }
    };
  },

  /**
   * parameterizes inputs(params) through test(index,param)
   * @param {String} name the name of the test
   * @param {Object[]} params the parameters (array of objects containing the inputs and outputs. param.description will be printed)
   * @param {Function} testFn the test to invoke for each param. called with (index, param).
   */
  parameterized: (name, params, testFn) => {
    _.forEach(params,
      (param, index) => {
        it(`${index}:${name}  ${(param.description || '')}`, global.test.asyncSpec(() => {
          testFn(index, param);
        }));
      }
    );
  }
};
