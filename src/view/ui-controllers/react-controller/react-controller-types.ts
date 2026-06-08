import type { Context, NamedExoticComponent, ReactNode } from 'react';
import { Store } from '@/store/lib';

export type TStoreProviderProps = {
  children: ReactNode;
}

export type TCreateReactStore = <S>(store: Store<S>) => [Context<S>, NamedExoticComponent<TStoreProviderProps>];
