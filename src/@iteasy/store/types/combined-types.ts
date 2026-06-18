import type { IMergeableStore, IStore } from './store-interfaces';

export type TMergedStoreObject = {
  [k: string]: IStore<any> & IMergeableStore;
};

export type TStoreState<T> = T extends IStore<infer S> ? S : never;

export type TStoreMemoized<T> = T extends IStore<TStoreState<T>>
  ? ReturnType<T['getMemo']>
  : never;

export type TMergedState = TUnionToIntersection<TStoreState<TMergedStoreObject[keyof TMergedStoreObject]>>;

export type TSelector<S, M, R> = (
  state: S,
  memoized?: M,
) => R;

export type TParametricSelector<S, M, R, A> = (
  state:S,
  addons: A,
  memoized?: M,
) => R;
