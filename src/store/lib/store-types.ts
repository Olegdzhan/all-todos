export type TFrameworkUpdaterFn = () => void;

export type TPredicate<S> = (state: S, ...args: any[]) => S;

export type TSelector<R, S> = (state: S) => R;

export type TStoreSubscriptionId = symbol;

export type TViewModelSelectors<S, V> = {
  [P in keyof V]: TSelector<V[P], S>;
};
