import { ETaskStatusMove } from '@/domain/task-status';
import type { TTodoElementDto } from './todo-common-dto';

export type TCreateTodoInDto = {
  description: string;
  title: string;
};

export type TUpdateTodoInDto = Omit<Partial<TTodoElementDto>, 'id'> & {
  id: string;
};

export type TUpdateTaskStatusInDto = {
  id: string;
  statusMove: ETaskStatusMove;
};
