import type { IStore, TFrameworkUpdaterFn } from '@iteasy/store';

export const createSubscribeFn = <S>(store: IStore<S>) => (
  (onStoreChange: TFrameworkUpdaterFn): () => void => {
    const id = store.subscribe(onStoreChange);
    return () => {
      store.unsubscribe(id);
    };
  }
);

export const createSnapshotFn = <S>(store: IStore<S>) => (): S => store.state;
