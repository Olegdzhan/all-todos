import type { IStore, TFrameworkUpdaterFn, TStoreSubscriptionId } from './types';

export abstract class AStore<S> implements IStore<S> {
  protected readonly _subscriptions = new Map<symbol, TFrameworkUpdaterFn>();

  abstract get state(): S;

  subscribe(frameworkUpdater: TFrameworkUpdaterFn): TStoreSubscriptionId {
    const id = Symbol(Date.now());
    this._subscriptions.set(id, frameworkUpdater);
    return id;
  }

  unsubscribe(id: TStoreSubscriptionId): void {
    if (this._subscriptions.has(id)) {
      this._subscriptions.delete(id);
    }
  }
}
