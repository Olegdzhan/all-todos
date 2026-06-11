import { useCallback, useSyncExternalStore } from 'react';
import { Store } from '@/store/lib';

export const useStore = <S>(store: Store<S>): S => {
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
  return state;
};
