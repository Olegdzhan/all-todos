import type { TTodoElementDto } from './todo-common-dto';
import type { ETaskStatusMove } from '@/domain/task-status';

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
