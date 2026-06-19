export function memoize<F extends TAnyFunction>(fn: F): F {
  const cache = new Map<string, ReturnType<F>>();

  return function memoizedFn(...args: Parameters<F>): ReturnType<F> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args) as ReturnType<F>;
    cache.set(key, result);
    return result;
  } as F;
}
