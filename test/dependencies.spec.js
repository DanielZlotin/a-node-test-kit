require('jasmine-expect');

describe('dependencies', () => {
  it('jasmine-expect', () => {
    expect({}).toBeObject();
    expect([]).toBeArrayOfSize(0);
  });

  describe('babel', () => {
    it('destructuring', () => {
      const outer = {inner: 'hello'};
      const {inner} = outer;
      expect(inner).toEqual('hello');
    });

    it('spread', () => {
      const {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
      expect(x).toEqual(1);
      expect(y).toEqual(2);
      expect(z).toEqual({a: 3, b: 4});
    });

    it('async await', async(done) => {
      const result = await delayedResult();
      expect(result).toEqual('hello');
      done();
    });

    async function delayedResult() {
      return new Promise((r) => r('hello'));
    }
  });
});
