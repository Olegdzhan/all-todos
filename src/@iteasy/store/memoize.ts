export function memoize<
  F extends (...args: any[]) => any,
  A extends Parameters<F>,
  R extends ReturnType<F>
>(fn: F extends (...args: A) => R ? F : never): F {
  const cache = new Map<string, R>();

  return function memoizedFn(...args: A): R {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  } as F;
}
