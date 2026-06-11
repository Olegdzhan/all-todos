export const createLoaderId = (name: string) => (id: string): string => (
  `${name}:${id}`
);
