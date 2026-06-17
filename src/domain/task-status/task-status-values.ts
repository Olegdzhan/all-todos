import { ETaskStatus } from './task-status-enums';

export const TODO_STATUS_ORDER_MAP = new Map<ETaskStatus, number>([
  [ETaskStatus.Open, 0],
  [ETaskStatus.InProgress, 1],
  [ETaskStatus.Complete, 2],
]);

export const TODO_STATUS_LINE: ETaskStatus[] = [];
TODO_STATUS_ORDER_MAP.forEach((value: number, key: ETaskStatus) => {
  TODO_STATUS_LINE[value] = key;
});

export const MIN_STATUS_ORDER = TODO_STATUS_ORDER_MAP.get(ETaskStatus.Open)!;
export const MAX_STATUS_ORDER = TODO_STATUS_ORDER_MAP.get(ETaskStatus.Complete)!;
