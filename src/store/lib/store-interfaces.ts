import type {
  TFrameworkUpdaterFn,
  TStoreSubscriptionId,
  TViewModelSelectors,
  TViewModelParametricSelectors,
} from './store-types.ts';

export interface IStore<S> {
  get state(): S;

  subscribe(frameworkUpdater: TFrameworkUpdaterFn): TStoreSubscriptionId;

  unsubscribe(id: TStoreSubscriptionId): void;
}

export interface IViewModel<S, V, A = never> {
  set addons(addons: A)

  set selectors(selectors: A extends never ? TViewModelSelectors<S, V> : TViewModelParametricSelectors<S, V, A>);

  get(): V;
}

export interface IParentMergedStore {
  onChildEmit(childKey: string): void;
}

export interface IMergeableStore {
  setParentMergedStore(parentMergedStoreRef: IParentMergedStore, childKey: string): void
}
