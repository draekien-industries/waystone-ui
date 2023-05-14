/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

/**
 * The parameters used to retrieve the value of a specific key
 */
export type GetValueOfKeyParams<
  TStore extends Record<string, any>,
  TKey extends keyof TStore
> = {
  /** The key used to retrieve the value */
  key: TKey;
};

/**
 * The return type of the getValueOfKey function
 */
export type GetValueOfKeyReturn<
  TStore extends Record<string, any>,
  TKey extends keyof TStore
> = TStore[TKey];

/**
 * The parameters used to set the value of a specific key
 */
export type SetValueOfKeyParams<
  TStore extends Record<string, any>,
  TKey extends keyof TStore
> = {
  /** The key to set the new value for */
  key: TKey;
  /** The updated value to save against the key */
  value: TStore extends Record<string, infer TValue> ? TValue : never;
};

/** The return type of the {@link useStrictKeyValueStore} hook */
export type UseStrictKeyValueStoreReturn<
  TStore extends Record<string, any> = Record<string, any>
> = {
  /** The current store */
  store: TStore;
  /** Gets the value of the provided key from the store */
  getValueOfKey: <TKey extends keyof TStore>({
    key,
  }: GetValueOfKeyParams<TStore, TKey>) => GetValueOfKeyReturn<TStore, TKey>;
  /** Sets the value of the provided key in the store */
  setValueOfKey: <TKey extends keyof TStore>({
    key,
    value,
  }: SetValueOfKeyParams<TStore, TKey>) => void;
};

/**
 * A hook for using a key value store that has strict type safety.
 * You must provide the complete shape of the key value store when
 * initialising the hook to take advantage of the strict type safety.
 *
 * The hook will only allow you to retrieve values using the keys present from the original store,
 * and only allow updates to values in each store that match the original shape.
 *
 * If you need a more dynamic store, then consider using the less strict {@link useKeyValueStore}
 *
 * @param initialStore - the shape and values of the initial state
 * @returns functions for interacting with the store
 */
export const useStrictKeyValueStore = <
  TStore extends Record<string, any> = Record<string, any>
>(
  initialStore = {} as TStore
): UseStrictKeyValueStoreReturn<TStore> => {
  const [store, setStore] = useState<TStore>(initialStore);

  const getValueOfKey = useCallback(
    <TKey extends keyof TStore>({
      key,
    }: GetValueOfKeyParams<TStore, TKey>): GetValueOfKeyReturn<TStore, TKey> =>
      store[key],
    [store]
  );

  const setValueOfKey = useCallback(
    <TKey extends keyof TStore>({
      key,
      value,
    }: SetValueOfKeyParams<TStore, TKey>) => {
      setStore((prev) => {
        const copy = { ...prev };

        copy[key] = value;

        return copy;
      });
    },
    [setStore]
  );

  return {
    store,
    getValueOfKey,
    setValueOfKey,
  };
};

/** The return type for the {@link useKeyValueStore} hook */
export type UseKeyValueStoreReturn = {
  /** The current store */
  store: Record<string, any>;
  /** Gets the value of the provided key from the store */
  getValueOfKey: <TValue = unknown>({
    key,
  }: GetValueOfKeyParams<Record<string, any>, string>) => TValue;
  /** Sets the value of the provided key in the store */
  setValueOfKey: ({
    key,
    value,
  }: SetValueOfKeyParams<Record<string, any>, string>) => void;
};

/**
 * A hook for using a key value store that allows for dynamic types. This has the tradeoff of less
 * type safety. If you would like strict type safety, then consider using the {@link useStrictKeyValueStore} hook.
 *
 * @param initialStore - the shape and values of the initial state
 * @returns functions for interacting with the store
 */
export const useKeyValueStore = (
  initialStore = {} as Record<string, any>
): UseKeyValueStoreReturn => {
  const [store, setStore] = useState(initialStore);

  const getValueOfKey = useCallback(
    <TValue = unknown>({
      key,
    }: GetValueOfKeyParams<Record<string, any>, string>): TValue => {
      if (key in store) {
        const value = store[key];

        return value;
      }

      throw new Error(
        `The key ${key} does not exist in the store. Current keys are: [${Object.keys(
          store
        ).join(',')}]`
      );
    },
    [store]
  );

  const setValueOfKey = useCallback(
    ({ key, value }: SetValueOfKeyParams<Record<string, any>, string>) => {
      setStore((prev) => {
        const copy = { ...prev };

        copy[key] = value;

        return copy;
      });
    },
    [setStore]
  );

  return {
    store,
    getValueOfKey,
    setValueOfKey,
  };
};
