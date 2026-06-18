import type { IStore } from './store-interfaces';

export interface IViewModel<S, V, A = any> {
  get(arg?: { memo: boolean }): V;

  getStore(): IStore<S>;

  set addons(addons: A);
}
