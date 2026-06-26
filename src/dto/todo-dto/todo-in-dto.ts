import type { ETaskStatusMove } from '@/domain/task-status';

export type TCreateTodoInDto = {
  description: string;
  title: string;
};

export type TGetTodoByIdInDto = {
  id: number;
};

export type TDeleteTodoInDto = TGetTodoByIdInDto;

export type TUpdateTodoInDto = {
  id: number;
  description?: string;
  title?: string;
};

export type TUpdateTaskStatusInDto = {
  id: number;
  statusMove: ETaskStatusMove;
};
