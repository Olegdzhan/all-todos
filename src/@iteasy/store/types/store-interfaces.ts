import type {
  TFrameworkUpdaterFn,
  TStoreSubscriptionId,
} from './base-types.ts';

export interface IStore<S> {
  get state(): S;

  subscribe(frameworkUpdater: TFrameworkUpdaterFn): TStoreSubscriptionId;

  unsubscribe(id: TStoreSubscriptionId): void;
}

export interface IParentMergedStore {
  onChildEmit(childKey: string): void;
}

export interface IMergeableStore {
  setParentMergedStore(parentMergedStoreRef: IParentMergedStore, childKey: string): void
}
