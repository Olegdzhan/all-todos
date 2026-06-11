import type { TPredicate } from './store-types';

export class Store<S> {
  private readonly _events: Map<string | number | symbol, TPredicate<S>> = new Map();

  private _subscriptions = new Map<string, () => void>();

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
    if (this._subscriptions.size > 0) {
      this._subscriptions.forEach((frameworkUpdater: () => void): void => {
        frameworkUpdater();
      });
    }
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

  subscribe(frameworkUpdater: () => void): string {
    const id = String(Date.now());
    this._subscriptions.set(id, frameworkUpdater);
    return id;
  }

  unsubscribe(id: string): void {
    if (this._subscriptions.has(id)) {
      this._subscriptions.delete(id);
    }
  }
}
