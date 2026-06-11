import type { IStore } from './store-interfaces'
import type {
  TFrameworkUpdaterFn,
  TPredicate,
  TStoreSubscriptionId,
} from './store-types';

export class Store<S> implements IStore<S> {
  private readonly _events: Map<string | number | symbol, TPredicate<S>> = new Map();

  private readonly _subscriptions = new Map<symbol, TFrameworkUpdaterFn>();

  constructor(private _state: S) {}

  get state(): S {
    return this._state;
  }

  act(eventName: string | number | symbol, ...args: any[]): Store<S> {
    if (this._events.has(eventName)) {
      const predicate: TPredicate<S> = this._events.get(eventName)!;
      this._state = predicate(this._state, ...args);
    } else {
      console.warn(`Store: Event ${String(eventName)} not found, or you try to call it before it has been registered`);
    }
    this._subscriptions.forEach((frameworkUpdater: TFrameworkUpdaterFn): void => {
      frameworkUpdater();
    });
    return this;
  }

  del(eventName: string | number | symbol): Store<S> {
    this._events.delete(eventName);
    return this;
  }

  reg(eventName: string | number | symbol, predicate: TPredicate<S>): Store<S> {
    this._events.set(eventName, predicate);
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
