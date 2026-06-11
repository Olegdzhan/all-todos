import { LOADERS_IDS } from '@/application/loaders';
import type { TLoadingState } from '@/store';
import type { TViewModelSelectors } from '@/store/lib';

export type TCreateTodoFormVM = {
  submitIsLoading: boolean;
};

export const createTodoFormVM: TViewModelSelectors<TLoadingState, TCreateTodoFormVM> = {
  submitIsLoading: (state: TLoadingState): boolean => Boolean(state[LOADERS_IDS.CREATE_TASK]),
};
