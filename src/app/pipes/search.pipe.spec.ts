import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {

  const fakeResponse = 'abc';

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
  it('checing input value', () => {
    const value = 'abc';
    const pipe = new SearchPipe();
    expect(pipe.transform(!value)).toBe(null);
  });
});
