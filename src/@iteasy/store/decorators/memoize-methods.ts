import { memoize } from '../memoize';

/**
 * Memoizing all methods in the class
 * memoized cache will be shared between all instances
 */
export function MemoizeMethods(): ClassDecorator {
  return (target) => {
    const prototype = target.prototype;

    for (const key of Object.getOwnPropertyNames(prototype)) {
      if (key === 'constructor') {
        continue;
      }

      const descriptor = Object.getOwnPropertyDescriptor(prototype, key);

      if (descriptor && typeof descriptor.value === 'function') {
        descriptor.value = memoize(descriptor.value);

        Object.defineProperty(prototype, key, descriptor);
      }
    }
  };
}
