import { useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  ViewModel,
  type IStore,
  type TViewModelSelectors,
} from '@/store/lib';
import type { IUseStore } from './interfaces';

export const useStore: IUseStore = <S, V>(
  store: IStore<S>,
  selectors?: TViewModelSelectors<S, V>,
): S | V => {
  const createSubscribe = useCallback((onStoreChange: () => void) => {
    const id = store.subscribe(onStoreChange);
    return () => {
      store.unsubscribe(id);
    };
  }, []);

  const getSnapshot = useCallback(
    (): S => store.state,
    [],
  );

  const state = useSyncExternalStore(createSubscribe, getSnapshot);
  if (selectors) {
    const viewModel = new ViewModel<S, V>(store);
    viewModel.selectors = selectors;
    const data = useMemo((): V => viewModel.get() as V, [state]);
    return data;
  }
  return state as S;
};
