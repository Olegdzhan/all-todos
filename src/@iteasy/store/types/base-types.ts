export type TFrameworkUpdaterFn = () => void;

export type TPredicate<S> = (state: S, ...args: any[]) => S;

export type TStoreSubscriptionId = symbol;
