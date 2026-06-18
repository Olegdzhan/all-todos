import {
  useMemo,
  useSyncExternalStore,
} from 'react';
import { createSubscribeFn, createSnapshotFn } from './react-controller-utils';

import type { IUseStore } from './interfaces';
import type { IViewModel } from '@iteasy/store';

export const useStore: IUseStore = <S, V, A = never>(
  viewModel: IViewModel<S, V, A>,
  config?: { addons?: A; memo?: boolean; },
): V => {
  const store = viewModel.getStore();
  // store will not be changed in the component subscription
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createSubscribe = useMemo(() => createSubscribeFn(store), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSnapshot = useMemo(() => createSnapshotFn(store), []);

  useSyncExternalStore(createSubscribe, getSnapshot);

  if (config?.addons) {
    // eslint-disable-next-line react-hooks/immutability
    viewModel.addons = config.addons;
  }
  return viewModel.get({ memo: config?.memo ?? false });
};
