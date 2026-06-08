import { useEffect, useState } from 'react';
import { Store } from '@/store/lib';

export const useStore = <S>(store: Store<S>): S => {
  const [state, setState] = useState(() => store.state);

  useEffect(() => {
    const id = store.subscribe(setState);

    return () => {
      store.unsubscribe(id);
    };
  }, []);

  return state;
};
