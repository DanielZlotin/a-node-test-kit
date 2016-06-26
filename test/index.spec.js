import * as index from './../src/index';
require('jasmine-expect');

describe('index', () => {
  it('exposes all testSetup functions', () => {
    expect(index.requireAbsolute).toBeFunction();
    expect(index.asyncSpec).toBeFunction();
    expect(index.parameterized).toBeFunction();
    expect(index.proxyquire).toBeFunction();
  });
});
