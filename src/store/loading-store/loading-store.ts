import { Store } from '../lib';
import { ELoadingStoreEvent } from './loading-store-enums';
import { LoadingStoreOperator } from './loading-store-operator';
import type { TLoadingState } from './loading-store-types';

const initialState: TLoadingState = {};

export const loadingStore = new Store<TLoadingState>(initialState)
  .reg(ELoadingStoreEvent.ClearAll, LoadingStoreOperator.clearAll)
  .reg(ELoadingStoreEvent.ClearLoading, LoadingStoreOperator.clearLoading)
  .reg(ELoadingStoreEvent.SetLoading, LoadingStoreOperator.setLoading);