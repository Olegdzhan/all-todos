import type {
  TFrameworkUpdaterFn,
  TStoreSubscriptionId,
} from './base-types.ts';

export interface IStore<S> {
  get state(): S;

  getMemo<M extends object>(): M;

  memoize(key: string, fn: <R>(s: S) => R): IStore<S>

  subscribe(frameworkUpdater: TFrameworkUpdaterFn): TStoreSubscriptionId;

  unsubscribe(id: TStoreSubscriptionId): void;
}

export interface IParentMergedStore {
  onChildEmit(childKey: string): void;
}

export interface IMergeableStore {
  setParentMergedStore(parentMergedStoreRef: IParentMergedStore, childKey: string): void
}
