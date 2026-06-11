import type { TLoadingState } from './loading-store-types';
import {
  DEFAULT_LOADING_LABEL,
  MAX_LOADING_ELEMENTS_IN_STORE,
} from './loading-store-values';

export class LoadingStoreOperator {
  private static _removeOne(state: TLoadingState, id: string): TLoadingState {
    if (id in state) {
      delete state[id];
      return { ...state };
    }
    return state;
  }

  static clearAll(_: TLoadingState): TLoadingState {
    return {} as TLoadingState;
  }

  static clearLoading(state: TLoadingState, ids: string[] | string): TLoadingState {
    if (Array.isArray(ids)) {
      const startStateLength = Object.keys(state).length;
      ids.forEach((id: string) => {
        state = LoadingStoreOperator._removeOne(state, id);
      });
      return startStateLength === Object.keys(state).length ? state : { ...state };
    }
    return LoadingStoreOperator._removeOne(state, ids);
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
