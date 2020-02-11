// Change order of tests

describe('Async Tests', () => {
  it('should pass', done => {
    setTimeout(() => {
      expect(true).toBeTruthy();
      done();
    }, 1000);
  });

  it('should not pass!', () => {
    setTimeout(() => {
      expect(false).toBeTruthy();
    }, 1000);
  });
});