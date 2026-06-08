import type { TPredicate } from './store-types';

export class Store<S> {
  private readonly _events: Map<string | number | symbol, TPredicate<S>> = new Map();

  private _subscription?: {
    id: string;
    updater: (state: S) => void;
  };

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
    this._subscription?.updater(this._state);
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

  subscribe(frameworkUpdater: (state: S) => void): string {
    const id = String(Date.now());
    this._subscription = { id, updater: frameworkUpdater };
    return id;
  }

  unsubscribe(id: string): Store<S> {
    if (this._subscription?.id === id) {
      delete this._subscription;
    }
    return this;
  }
}
