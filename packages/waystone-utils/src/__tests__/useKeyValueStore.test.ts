import { act, renderHook } from '@testing-library/react';
import { useKeyValueStore, useStrictKeyValueStore } from '../useKeyValueStore';

describe('useStrictKeyValueStore hook', () => {
  it('returns the default values when no updates are triggered', () => {
    const { result } = renderHook(() =>
      useStrictKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    expect(result.current.getValueOfKey({ key: '0' })).toStrictEqual({
      test: 'one',
    });

    expect(result.current.getValueOfKey({ key: '1' })).toStrictEqual({
      test: 'two',
    });

    expect(result.current.store).toStrictEqual({
      '0': { test: 'one' },
      '1': { test: 'two' },
    });
  });

  it('returns the new value of a given key after it has been set', () => {
    const { result } = renderHook(() =>
      useStrictKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    act(() => {
      result.current.setValueOfKey({ key: '0', value: { test: 'new one' } });
    });

    expect(result.current.getValueOfKey({ key: '0' })).toStrictEqual({
      test: 'new one',
    });
  });

  it('throws an error when trying to access a key that does not exist', () => {
    const { result } = renderHook(() =>
      useStrictKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    act(() => {
      // @ts-expect-error key does not exist
      result.current.setValueOfKey({ key: '2', value: { test: 'new one' } });
    });

    // @ts-expect-error key does not exist
    expect(result.current.getValueOfKey({ key: '2' })).toStrictEqual({
      test: 'new one',
    });
  });
});

describe('useKeyValueStore hook', () => {
  it('returns the default values when no updates are triggered', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    expect(result.current.getValueOfKey({ key: '0' })).toStrictEqual({
      test: 'one',
    });

    expect(result.current.getValueOfKey({ key: '1' })).toStrictEqual({
      test: 'two',
    });

    expect(result.current.store).toStrictEqual({
      '0': { test: 'one' },
      '1': { test: 'two' },
    });
  });

  it('returns the new value of a given key after it has been set', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    act(() => {
      result.current.setValueOfKey({ key: '0', value: { test: 'new one' } });
    });

    expect(result.current.getValueOfKey({ key: '0' })).toStrictEqual({
      test: 'new one',
    });
  });

  it('can set the value of a key that does not exist initially', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    act(() => {
      result.current.setValueOfKey({ key: '2', value: { test: 'new one' } });
    });

    expect(result.current.getValueOfKey({ key: '2' })).toStrictEqual({
      test: 'new one',
    });
  });

  it('throws an error when trying to access a key that does not exist', () => {
    const { result } = renderHook(() =>
      useKeyValueStore({
        '0': { test: 'one' },
        '1': { test: 'two' },
      })
    );

    expect(() =>
      result.current.getValueOfKey({ key: '2' })
    ).toThrowErrorMatchingSnapshot();
  });
});
