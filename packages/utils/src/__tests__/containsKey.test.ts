import { containsKey } from '../containsKey';

describe('containsKey', () => {
  describe.each([
    [{ a: 'test' } as const, ['a'] as const, true],
    [{ a: 'test', b: 'test' } as const, ['a', 'b'] as const, true],
    [{ a: 'test' } as const, ['b'] as const, false],
    [{ a: 'test' } as const, ['a', 'b'] as const, false],
    [{ 1: 'test' } as const, [1] as const, true],
    [{ 1: 'test' } as const, [2] as const, false],
  ])('check object %p for keys %p', (obj, keys, expected) => {
    it(`returns ${expected}`, () => {
      expect(containsKey(obj, ...keys)).toBe(expected);
    });
  });
});
