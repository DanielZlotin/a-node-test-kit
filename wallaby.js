/*eslint-disable*/
'use strict';

const babelOptions = JSON.parse(require('fs').readFileSync('./.babelrc'));

process.env.wallabyScriptDir = __dirname;

module.exports = function(wallaby) {
  return {
    env: {
      type: 'node'
    },

    testFramework: 'jasmine',

    files: [
      {pattern: `node_modules/jasmine-expect/**/*.*`, instrument: false, load: false},
      {pattern: `a-node-test-kit/lib/**/*.*`, instrument: false, load: false},
      'src/**/*.js',
      '!src/**/*.[Ss]pec.js'
    ],

    tests: [
      'test/**/*.[Ss]pec.js',
      'spec/**/*.[Ss]pec.js',
      'src/**/*.[Ss]pec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel(babelOptions)
    },

    setup: function(w) {
      require('babel-polyfill');
      require('app-root-path').setPath(w.projectCacheDir);
      //require(`${process.env.wallabyScriptDir}/lib/testSetup`);
    }
  };
};
