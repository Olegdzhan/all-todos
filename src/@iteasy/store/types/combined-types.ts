import type { IMergeableStore, IStore } from './store-interfaces';

export type TMergedStoreObject = {
  [k: string]: IStore<any> & IMergeableStore;
};

export type TStoreState<T> = T extends IStore<infer S> ? S : never;

export type TMergedState = TUnionToIntersection<TStoreState<TMergedStoreObject[keyof TMergedStoreObject]>>;

export type TSelector<S, R> = TAnyFunction & ((state: S) => R);

export type TParametricSelector<S, R, A> = TAnyFunction & ((state:S, addons: A) => R);
