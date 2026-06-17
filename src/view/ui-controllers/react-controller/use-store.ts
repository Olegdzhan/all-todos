import { useMemo, useSyncExternalStore } from 'react';
import { ViewModel } from '@/store/lib';
import { createSubscribeFn, createSnapshotFn } from './react-controller-utils';

import type { IUseStore } from './interfaces';
import type { IStore, TViewModelParametricSelectors, TViewModelSelectors } from '@/store/lib';

export const useStore: IUseStore = <S, V, A = never>(
  store: IStore<S> ,
  selectors?: A extends never ? TViewModelSelectors<S, V> : TViewModelParametricSelectors<S, V, A>,
  addons?: A,
): S | V => {
  // store will not be changed in the component subscription
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createSubscribe = useMemo(() => createSubscribeFn(store), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSnapshot = useMemo(() => createSnapshotFn(store), []);

  const state = useSyncExternalStore(createSubscribe, getSnapshot);
  if (selectors) {
    // TODO не перезаписывать на каждом вызове, использовать useRef
    const viewModel = new ViewModel<S, V, A>(store);
    viewModel.selectors = selectors;
    if (addons) {
      viewModel.addons = addons;
    }
    return viewModel.get();
  }
  return state as S;
};
