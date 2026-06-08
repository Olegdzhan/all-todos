import { createContext, memo } from 'react';
import type { TCreateReactStore, TStoreProviderProps } from './react-controller-types';
import { useStore } from './use-store';

export const createReactStore: TCreateReactStore = (store) => {
  const StoreContext = createContext(store.state)

  const StoreProvider = memo<TStoreProviderProps>(({
    children
  }) => {
    const state = useStore(store);

    return (
      <StoreContext value={state}>
        {children}
      </StoreContext>
    );
  });

  return [StoreContext, StoreProvider];
};
