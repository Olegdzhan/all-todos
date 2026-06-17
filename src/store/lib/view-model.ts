import type { IStore, IViewModel } from './store-interfaces'
import type {
  TSelector,
  TParametricSelector,
  TViewModelSelectors,
  TViewModelParametricSelectors,
} from './store-types';

export class ViewModel<S, V, A = never> implements IViewModel<S, V, A> {
  private _addons?: A;

  private _selectorsEntries?: Array<[
    string,
    TSelector<V[keyof V], S> | TParametricSelector<V[keyof V], S, A>
  ]>;

  constructor(private _store: IStore<S>) {}

  set selectors(selectors: A extends never ? TViewModelSelectors<S, V> : TViewModelParametricSelectors<S, V, A>) {
    this._selectorsEntries = Object.entries<
      TSelector<V[keyof V], S> | TParametricSelector<V[keyof V], S, A>
    >(selectors);
  }

  set addons(addons: A) {
    this._addons = addons;
  }

  get(): V {
    if (!this._selectorsEntries) {
      throw new Error('You must define selectors before calling ViewModel.get');
    }
    return this._selectorsEntries.reduce(
      (acc: V, [key, selector]: [string,  TSelector<V[keyof V], S> | TParametricSelector<V[keyof V], S, A>]): V => {
        acc[<keyof V>key] = this._addons
          ? (<TParametricSelector<V[keyof V], S, A>>selector)(this._store.state, this._addons)
          : (<TSelector<V[keyof V], S>>selector)(this._store.state);
        return acc;
      },
      <V>{},
    );
  }
}
