export const createLoaderId = (name: string) => (id: string | number): string => (
  `${name}:${id}`
);
