import { AStore } from './abstract-store';
import type {
  IMergeableStore,
  IParentMergedStore,
  IStore,
  TFrameworkUpdaterFn,
  TMergedState,
  TMergedStoreObject,
} from './types';

export class MergedStore extends AStore<TMergedState> implements IParentMergedStore{
  private _state: TMergedState;

  constructor(private _stores: TMergedStoreObject) {
    super();
    this._state = {};
    Object.entries(this._stores).forEach(([key, store]: [string, IStore<any> & IMergeableStore]) => {
      this._state[key as keyof TMergedStoreObject] = store.state;
      store.setParentMergedStore(this, key);
    });
  }

  get state(): TMergedState {
    return this._state;
  }

  onChildEmit(childKey: string) {
    this._state = {
      ...this._state,
      [childKey]: this._stores[childKey].state,
    };
    this._subscriptions.forEach((frameworkUpdater: TFrameworkUpdaterFn): void => {
      frameworkUpdater();
    });
  }
}
