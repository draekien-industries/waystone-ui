/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

export type GetValueOfKeyParams<
  TStore extends Record<string, any>,
  TKey extends keyof TStore
> = {
  key: TKey;
};

export type GetValueOfKeyReturn<
  TStore extends Record<string, any>,
  TKey extends keyof TStore
> = TStore[TKey];

export type SetValueOfKeyParams<
  TStore extends Record<string, any>,
  TKey extends keyof TStore
> = {
  key: TKey;
  value: TStore extends Record<string, infer TValue> ? TValue : never;
};

export const useStrictKeyValueStore = <
  TStore extends Record<string, any> = Record<string, any>
>(
  initialStore = {} as TStore
) => {
  const [store, setStore] = useState<TStore>(initialStore);

  const getValueOfKey = useCallback(
    <TKey extends keyof TStore>({
      key,
    }: GetValueOfKeyParams<TStore, TKey>): GetValueOfKeyReturn<TStore, TKey> =>
      store[key],
    [store]
  );

  const setValueOfKey = useCallback(
    ({ key, value }: SetValueOfKeyParams<TStore, keyof TStore>) => {
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

export type UseStrictKeyValueStoreReturn<
  TStore extends Record<string, any> = Record<string, any>
> = ReturnType<typeof useStrictKeyValueStore<TStore>>;

export const useKeyValueStore = (initialStore = {} as Record<string, any>) => {
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

export type UseKeyValueStoreReturn = ReturnType<typeof useKeyValueStore>;
