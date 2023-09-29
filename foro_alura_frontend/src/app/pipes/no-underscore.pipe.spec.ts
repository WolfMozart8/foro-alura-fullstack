import { NoUnderscorePipe } from './no-underscore.pipe';

describe('NoUnderscorePipe', () => {
  it('create an instance', () => {
    const pipe = new NoUnderscorePipe();
    expect(pipe).toBeTruthy();
  });
});
