import { ETodoStatus } from '@/dto';

export const TODO_STATUS_ORDER_MAP = new Map<ETodoStatus, number>([
  [ETodoStatus.Open, 0],
  [ETodoStatus.InProgress, 1],
  [ETodoStatus.Complete, 2],
]);


export let TODO_STATUS_LINE: ETodoStatus[] = [];
TODO_STATUS_ORDER_MAP.forEach((value: number, key: ETodoStatus) => {
  TODO_STATUS_LINE[value] = key;
});

export const MAX_STATUS_ORDER = TODO_STATUS_ORDER_MAP.get(ETodoStatus.Complete)!;
