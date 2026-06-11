import { useSyncExternalStore} from 'react';
import { Store } from '@/store/lib';

const createSubscribe = <S>(store: Store<S>) => (onStoreChange: () => void) => {
  const id = store.subscribe(onStoreChange);
  return () => {
    store.unsubscribe(id);
  };
}

export const useStore = <S>(store: Store<S>): S => {
  const subscribe = createSubscribe(store);
  const state = useSyncExternalStore(subscribe, () => store.state);
  return state;
};
