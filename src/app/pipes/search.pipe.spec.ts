import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('checking input value', () => {
    const value = 'abc';
    const pipe = new SearchPipe();
    expect(pipe.transform(!value)).toBe(null);
  });

  it('searching "abc"', () => {
    const fakeValue = 'abc';
    const pipe = new SearchPipe();
    expect(pipe.transform(fakeValue)).toEqual(fakeValue);
  });

  it('searching with !args', () => {
    const fakeValue = 'abc';
    const fakeArgs = ['abc'];
    const pipe = new SearchPipe();
    expect(pipe.transform(fakeValue, !fakeArgs)).toEqual(fakeValue);
  });
});
