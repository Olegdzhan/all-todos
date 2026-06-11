import { ETaskStatus, ETaskStatusMove } from '@/domain/task-status';
import {
  MAX_STATUS_ORDER,
  MIN_STATUS_ORDER,
  TODO_STATUS_LINE,
  TODO_STATUS_ORDER_MAP,
} from '@/domain/task-status';

export const moveStatus = (
  status: ETaskStatus,
  direction: ETaskStatusMove
): ETaskStatus | null => {
  const currentPosition = TODO_STATUS_ORDER_MAP.get(status);
  if (currentPosition == null) {
    return null;
  }
  let nextPosition: number;
  switch (direction) {
    case ETaskStatusMove.Next:
      nextPosition = currentPosition + 1;
      break;
    case ETaskStatusMove.Prev:
      nextPosition = currentPosition - 1;
      break;
    default:
      nextPosition = -1;
  }
  if (nextPosition < MIN_STATUS_ORDER || nextPosition > MAX_STATUS_ORDER) {
    return  null;
  }
  return TODO_STATUS_LINE[nextPosition]!;
};
