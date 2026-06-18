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
  Sel = TSelector<S, ReturnType<IStore<S>['getMemo']>, V>,
  PSel = TParametricSelector<S, ReturnType<IStore<S>['getMemo']>, V, A>,
> implements IViewModel<S, V, A>{
  private _addons?: A;

  private readonly _memoSelector: Sel | PSel;

  constructor(
    private readonly _store: IStore<S>,
    private readonly _selector: Sel | PSel,
  ) {
    this._memoSelector = memoize(this._selector as any) as Sel | PSel;
  }

  private _defineSelector(isMemoizedValue?: boolean): Sel | PSel {
    return isMemoizedValue ? this._memoSelector : this._selector;
  }

  set addons(addons: A) {
    this._addons = addons;
  }

  get(arg?: { memo: boolean; }): V {
    const selector = this._defineSelector(arg?.memo);
    if (!this._addons) {
      // TODO: remove ts-ignore
      // @ts-ignore
      return selector(this._store.state, this._store.getMemo());
    }
    // @ts-ignore
    return selector(this._store.state, this._addons, this._store.getMemo());
  }

  getStore(): IStore<S> {
    return this._store;
  }
}