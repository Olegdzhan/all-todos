import { memoize } from './memoize';

import type {
  IStore,
  IViewModel,
  TParametricSelector,
  TSelector,
} from './types';

export class ViewModel<
  S,
  V,
  A = any,
> implements IViewModel<S, V, A>{
  private _addons?: A;

  private readonly _memoSelector: TSelector<S, V> | TParametricSelector<S, V, A>;

  constructor(
    private readonly _store: IStore<S>,
    private readonly _selector: TSelector<S, V> | TParametricSelector<S, V, A>,
  ) {
    this._memoSelector = memoize(this._selector);
  }

  private _defineSelector(isMemoizedValue?: boolean): TSelector<S, V> | TParametricSelector<S, V, A> {
    return isMemoizedValue ? this._memoSelector : this._selector;
  }

  set addons(addons: A) {
    this._addons = addons;
  }

  get(arg?: { memo: boolean; }): V {
    const selector = this._defineSelector(arg?.memo);
    if (!this._addons) {
      return (selector as TSelector<S, V>)(this._store.state);
    }
    return (selector as TParametricSelector<S, V, A>)(this._store.state, this._addons);
  }

  getStore(): IStore<S> {
    return this._store;
  }
}