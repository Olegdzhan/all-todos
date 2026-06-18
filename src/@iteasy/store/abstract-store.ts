import { memoize } from './memoize';
import type { IStore, TFrameworkUpdaterFn, TStoreSubscriptionId } from './types';

export abstract class AStore<S> implements IStore<S> {
  protected readonly _subscriptions = new Map<symbol, TFrameworkUpdaterFn>();

  protected _memoCache = new Map<string, <R>(s: S) => R>();

  abstract get state(): S;

  getMemo<M extends object = object>(): M {
    const result = {} as M;
    this._memoCache.forEach((memoFn: <R>(s: S) => R, key: string) => {
      result[key as keyof M] = memoFn(this.state);
    });
    return result;
  }

  memoize(key: string, fn: <R>(s: S) => R): IStore<S> {
    this._memoCache.set(key, memoize(fn));
    return this;
  }

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
