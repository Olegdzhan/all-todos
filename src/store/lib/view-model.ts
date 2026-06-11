import type { IStore, IViewModel } from './store-interfaces'
import type { TSelector, TViewModelSelectors } from './store-types';

export class ViewModel<S, V> implements IViewModel<S, V> {
  private _selectors?: TViewModelSelectors<S, V>;

  constructor(private _store: IStore<S>) {}

  set selectors(selectors: TViewModelSelectors<S, V>) {
    this._selectors = selectors;
  }

  get(): V {
    if (!this._selectors) {
      throw new Error('You must define selectors before calling ViewModel.get');
    }
    return Object.entries<TSelector<V[keyof V], S>>(this._selectors).reduce(
      (acc: V, [key, selector]: [string, TSelector<V[keyof V], S>]): V => {
        acc[<keyof V>key] = selector(this._store.state);
        return acc;
      },
      <V>{},
    );
  }
}
