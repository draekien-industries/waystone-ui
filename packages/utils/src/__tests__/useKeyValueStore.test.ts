import { act, renderHook } from '@waystone/testing-library';
import { useKeyValueStore } from '../useKeyValueStore';

describe('useKeyValueStore', () => {
  it('should set initial values', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        some: 'value',
      })
    );

    expect(result.current.getValues()).toStrictEqual({ some: 'value' });
  });

  it('should clear values', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        some: 'value',
      })
    );

    act(() => result.current.clearValues('some'));

    expect(result.current.getValues().some).toBeNull();
  });

  it('should update values', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        some: 'value',
      })
    );

    act(() => result.current.setValue('some', 'where'));

    expect(result.current.getValues().some).toBe('where');
  });

  it('should get values', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        some: 'value',
      })
    );

    const [some] = result.current.getValues('some');

    expect(some).toBe('value');
  });

  it('should return all values when no keys are provided', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        some: 'value',
      })
    );

    const store = result.current.getValues();

    expect(store).toStrictEqual({ some: 'value' });
  });

  it('should accept no initial value', () => {
    const { result } = renderHook(() => useKeyValueStore());

    expect(result.current.getValues()).toStrictEqual({});
  });

  it('should allow setting value when there is no initial value', () => {
    const { result } = renderHook(() => useKeyValueStore());

    act(() => result.current.setValue('some', 'thing'));

    expect(result.current.getValues('some')).toStrictEqual(['thing']);
    expect(result.current.getValues()).toStrictEqual({ some: 'thing' });
  });

  it('should allow clearing a value when there is no initial value', () => {
    const { result } = renderHook(() => useKeyValueStore());

    act(() => result.current.clearValues('some'));

    expect(result.current.getValues().some).toBeNull();
  });

  it('should allow retrieving multiple values', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        a: 'a',
        b: 1,
        c: true,
      })
    );

    const [a, b, c] = result.current.getValues('a', 'b', 'c');

    expect(a).toBe('a');
    expect(b).toBe(1);
    expect(c).toBe(true);
  });

  it('should set multiple values', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        a: 'a',
        b: 1,
        c: true,
      })
    );

    act(() =>
      result.current.setValues({
        a: 'b',
        b: 2,
      })
    );

    const [a, b, c] = result.current.getValues('a', 'b', 'c');

    expect(a).toBe('b');
    expect(b).toBe(2);
    expect(c).toBe(true);
  });
});
