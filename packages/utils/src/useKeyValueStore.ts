import { useCallback, useMemo, useReducer, type Reducer } from 'react';

/**
 * An alias for a record containing unknown keys and values
 */
export type KeyValueStore = Record<PropertyKey, unknown>;

/**
 * Extracts the value types associated with the keys of a key value store into a tuple
 * @template T a record of type KeyValueStore
 * @template K the keys being used to access the KeyValueStore
 * @template Acc the accumulator holding the constructed tuple
 * @see {@link KeyValueStore}
 */
export type ValuesFromKeyValueStore<
  T extends KeyValueStore,
  K extends Array<keyof T>,
  Acc extends Array<unknown> = [],
> = K extends [infer First, ...infer Rest]
  ? First extends keyof T
    ? Rest extends Array<keyof T>
      ? ValuesFromKeyValueStore<T, Rest, [...Acc, T[First] | null]>
      : Acc
    : Acc
  : Acc;

type KeyValueStoreAction<T extends KeyValueStore> =
  | {
      type: 'SET_VALUE';
      key: keyof T;
      value: unknown;
    }
  | {
      type: 'SET_VALUES';
      values: Partial<T>;
    }
  | {
      type: 'CLEAR_VALUES';
      keys: Array<keyof T>;
    };

const keyValueStoreReducer = <T extends KeyValueStore>(
  state: T,
  action: KeyValueStoreAction<T>
) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, [action.key]: action.value };
    case 'SET_VALUES':
      return { ...state, ...action.values };
    case 'CLEAR_VALUES':
      return action.keys.reduce(
        (acc, key) => ({
          ...acc,
          [key]: null,
        }),
        state
      );
    default:
      return state;
  }
};

/**
 * The entire {@link KeyValueStore} if no keys are provided, otherwise the {@link ValuesFromKeyValueStore}
 */
export type KeyValueStoreGetValuesReturn<
  T extends KeyValueStore,
  K extends Array<keyof T>,
> = K extends [] ? T : ValuesFromKeyValueStore<T, K>;

/**
 * A hook which defines methods for interacting with some object saved in react state.
 * @template T the type of the KeyValueStore.
 * @param initialStore an optional initial value to assign as the {@link KeyValueStore}. Defaults to `{}` when not provided.
 * @returns methods for interacting with the key value store. See {@link UseKeyValueStoreReturn} for more details.
 */
export const useKeyValueStore = <T extends KeyValueStore>(initialStore?: T) => {
  const [state, dispatch] = useReducer<Reducer<T, KeyValueStoreAction<T>>>(
    keyValueStoreReducer,
    initialStore ?? ({} as T)
  );

  /**
   * Gets values from the key value store
   * @param keys an optional array of keys that should be used to access the key value store
   * @returns The entire {@link KeyValueStore} if no keys are provided, otherwise the {@link ValuesFromKeyValueStore}
   */
  const getValues = useCallback(
    <K extends Array<keyof T>>(
      ...keys: K
    ): KeyValueStoreGetValuesReturn<T, K> => {
      if (keys.length) {
        return keys.map((key) => state[key]) as KeyValueStoreGetValuesReturn<
          T,
          K
        >;
      }

      return state as KeyValueStoreGetValuesReturn<T, K>;
    },
    [state]
  );

  /**
   * Updates the key value store, setting the value associated with the provided key to the new value
   * @param key a key present in the key value store
   * @param value the value to assign the specified key
   */
  const setValue = useCallback((key: keyof T, value: T[typeof key]) => {
    dispatch({
      type: 'SET_VALUE',
      key,
      value,
    });
  }, []);

  /**
   * Updates the key value store with the provided values, replacing any matching keys with their updated values via a shallow merge.
   * @param values the values that should be updated in the store
   */
  const setValues = useCallback((values: Partial<T>) => {
    dispatch({
      type: 'SET_VALUES',
      values,
    });
  }, []);

  /**
   * Updates the key value store, setting the values of the provided keys to `null`
   */
  const clearValues = useCallback((...keys: Array<keyof T>) => {
    dispatch({ type: 'CLEAR_VALUES', keys });
  }, []);

  return useMemo(
    () => ({
      clearValues,
      getValues,
      setValue,
      setValues,
    }),
    [clearValues, getValues, setValue, setValues]
  );
};

export type UseKeyValueStoreReturn<T extends KeyValueStore = KeyValueStore> =
  ReturnType<typeof useKeyValueStore<T>>;
