import { useMemo, useSyncExternalStore } from 'react';
import {
  ViewModel,
  type IStore,
  type TViewModelSelectors,
} from '@/store/lib';
import type { IUseStore } from './interfaces';
import { createSubscribeFn, createSnapshotFn } from './react-controller-utils';

export const useStore: IUseStore = <S, V>(
  store: IStore<S> ,
  selectors?: TViewModelSelectors<S, V>,
): S | V => {
  const createSubscribe = useMemo(() => createSubscribeFn(store), []);
  const getSnapshot = useMemo(() => createSnapshotFn(store), []);

  const state = useSyncExternalStore(createSubscribe, getSnapshot);
  if (selectors) {
    const viewModel = new ViewModel<S, V>(store);
    viewModel.selectors = selectors;
    const data = useMemo((): V => viewModel.get() as V, [state]);
    return data;
  }
  return state as S;
};
