import { ViewModel } from '@iteasy/store';
import { LOADERS_IDS } from '@/application/loaders';
import { loadingStore } from '@/store';

import type { TLoadingState } from '@/store';

export type TCreateTodoFormVM = {
  submitIsLoading: boolean;
};

export const createTodoFormVM = new ViewModel<TLoadingState, TCreateTodoFormVM>(
  loadingStore,
  (state: TLoadingState): TCreateTodoFormVM => ({ submitIsLoading: Boolean(state[LOADERS_IDS.CREATE_TASK]) }),
);
