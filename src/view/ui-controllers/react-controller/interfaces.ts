import type {
  IStore,
  TViewModelSelectors,
  TViewModelParametricSelectors,
} from '@/store/lib';

export interface IUseStore {
  <S>(store: IStore<S>): S;
}

export interface IUseStore {
  <S, V, A>(
    store: IStore<S>,
    selectors: A extends never ? TViewModelSelectors<S, V> : TViewModelParametricSelectors<S, V, A>,
    addons?: A,
  ): V;
}
