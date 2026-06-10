import { ETodoStatus, ETodoTaskStatusMove } from '@/dto';
import {
  MAX_STATUS_ORDER,
  TODO_STATUS_LINE,
  TODO_STATUS_ORDER_MAP,
} from './todo-mock-server-constants';

export const moveStatus = (
  status: ETodoStatus,
  direction: ETodoTaskStatusMove
): ETodoStatus | null => {
  const currentPosition = TODO_STATUS_ORDER_MAP.get(status);
  if (currentPosition == null) {
    return null;
  }
  let nextPosition: number;
  switch (direction) {
    case ETodoTaskStatusMove.Next:
      nextPosition = currentPosition + 1;
      break;
    case ETodoTaskStatusMove.Prev:
      nextPosition = currentPosition - 1;
      break;
    default:
      nextPosition = -1;
  }
  if (nextPosition < 0 || nextPosition > MAX_STATUS_ORDER) {
    return  null;
  }
  return TODO_STATUS_LINE[nextPosition]!;
};
