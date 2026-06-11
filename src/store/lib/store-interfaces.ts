import type {
  TFrameworkUpdaterFn,
  TStoreSubscriptionId,
  TViewModelSelectors,
} from './store-types.ts';

export interface IStore<S> {
  get state(): S;

  subscribe(frameworkUpdater: TFrameworkUpdaterFn): TStoreSubscriptionId;

  unsubscribe(id: TStoreSubscriptionId): void;
}

export interface IViewModel<S, V> {
  set selectors(selectors: TViewModelSelectors<S, V>);

  get(): V;
}
