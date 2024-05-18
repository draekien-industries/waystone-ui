import { mergeObjects } from '../waystone.utils';

describe('mergeObjects util', () => {
  it('merges two objects', () => {
    const first = { a: 'a', b: { c: 'c' } };
    const second = { a: 'b', b: { d: 'd' }, e: 'e' };
    const expected = {
      a: 'b',
      b: {
        c: 'c',
        d: 'd',
      },
      e: 'e',
    };

    const merged = mergeObjects(first, second);

    expect(merged).toStrictEqual(expected);
  });

  it('returns target if source is falsey', () => {
    const first = { a: 'a', b: { c: 'c' } };

    const merged = mergeObjects(first, null);

    expect(merged).toBe(first);
  });
});
