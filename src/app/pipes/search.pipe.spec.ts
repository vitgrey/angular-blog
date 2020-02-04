import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
  it('find similar value', () => {
    const pipe = new SearchPipe();
    expect(pipe.transform('item')).toBe('item');
  });
});
