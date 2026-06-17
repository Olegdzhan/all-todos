import { AStore } from './abstract-store';
import type { IStore } from './store-interfaces.ts';

export type TMergedStoreObject = {
  [k: string]: IStore<any>;
};

type TStoreState<T> = T extends IStore<infer S> ? S : never;

type TMergedState = TUnionToIntersection<TStoreState<TMergedStoreObject[keyof TMergedStoreObject]>>

// TODO: Проработать типизацию для ViewModel
export class MergedStore extends AStore<TMergedState> {
  private _stores: Array<[string, IStore<any>]>;

  constructor(stores: TMergedStoreObject) {
    super();
    this._stores = Object.entries(stores);
  }

  get state(): TMergedState {
    return this._stores.reduce(
      (acc: TMergedState, [key, store]): TMergedState => {
        acc[key as keyof TMergedStoreObject] = store.state;
        return acc;
      },
      {} as TMergedState,
    );
  }
}
