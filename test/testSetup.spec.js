require('jasmine-expect');
import * as test from './../src/testSetup';

describe('testSetup', () => {
  it('returns testkit object', () => {
    expect(test).toBeDefined();
    expect(test).toBeObject();
  });

  describe('test object', () => {
    it('has requireAbsolute', () => {
      expect(test.requireAbsolute).toBeFunction();
    });

    it('has proxyquire', () => {
      expect(test.proxyquire).toBeFunction();
    });

    it('has asyncSpec', () => {
      expect(test.asyncSpec).toBeFunction();
    });

    it('has parameterized', () => {
      expect(test.parameterized).toBeFunction();
    });
  });
});
