import exampleToTest from '../src';

describe('test_example', () => {
  it('should return hello world', () => {
    expect(exampleToTest()).toBe('Hello World');
  });
});
