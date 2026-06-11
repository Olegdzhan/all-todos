import type { TLoadingState } from './loading-store-types';
import {
  DEFAULT_LOADING_LABEL,
  MAX_LOADING_ELEMENTS_IN_STORE,
} from './loading-store-values';

export class LoadingStoreOperator {
  static clearAll(_: TLoadingState): TLoadingState {
    return {} as TLoadingState;
  }

  static clearLoading(state: TLoadingState, ids: string[] | string): TLoadingState {
    if (Array.isArray(ids)) {
      ids.forEach((id: string) => {
        delete state[id];
      });
      return { ...state };
    }
    if (<string>ids in state) {
      delete state[<string>ids];
      return { ...state };
    }
    return state;
  }

  static setLoading(
    state: TLoadingState,
    id: string,
    label: string = DEFAULT_LOADING_LABEL,
  ): TLoadingState {
    if (Object.keys(state).length === MAX_LOADING_ELEMENTS_IN_STORE) {
      return { [id]: label };
    }
    return { ...state, [id]: label };
  }
}
