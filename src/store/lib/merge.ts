import { MergedStore, type TMergedStoreObject } from './merged-store.ts';

export const merge = (stores: TMergedStoreObject): MergedStore => (
  new MergedStore(stores)
);
