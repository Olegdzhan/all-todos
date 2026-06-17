import { useMemo, useSyncExternalStore } from 'react';
import {
  ViewModel,
  type IStore,
  type TViewModelSelectors,
  type TViewModelParametricSelectors,
} from '@/store/lib';
import type { IUseStore } from './interfaces';
import { createSubscribeFn, createSnapshotFn } from './react-controller-utils';

export const useStore: IUseStore = <S, V, A = never>(
  store: IStore<S> ,
  selectors?: A extends never ? TViewModelSelectors<S, V> : TViewModelParametricSelectors<S, V, A>,
  addons?: A,
): S | V => {
  const createSubscribe = useMemo(() => createSubscribeFn(store), []);
  const getSnapshot = useMemo(() => createSnapshotFn(store), []);

  const state = useSyncExternalStore(createSubscribe, getSnapshot);
  if (selectors) {
    const viewModel = new ViewModel<S, V, A>(store);
    viewModel.selectors = selectors;
    if (addons) {
      viewModel.addons = addons;
    }
    const data = useMemo((): V => viewModel.get() as V, [state, addons]);
    return data;
  }
  return state as S;
};
