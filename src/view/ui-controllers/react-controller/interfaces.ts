import type { IStore, TViewModelSelectors } from '@/store/lib';

export interface IUseStore {
  <S>(store: IStore<S>): S;
}

export interface IUseStore {
  <S, V>(store: IStore<S>, selectors: TViewModelSelectors<S, V>): V;
}
