export const delayedPromise = <T>(ms: number, deferValue: T): Promise<T> => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(deferValue);
    }, ms);
  }
));
