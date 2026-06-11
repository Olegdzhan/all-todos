import { TodoApi } from '@/api';
import { ETaskStatusMove } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';
import { ETodoStoreEvents, todoStore } from '@/store';

export const processUpdateTaskStatus = async (
  taskId: string,
  direction: ETaskStatusMove,
): Promise<void> => {
  todoStore.act(ETodoStoreEvents.SetError, null);
  todoStore.act(ETodoStoreEvents.SetLoading, true);
  const payload: TTodoDto.TUpdateTaskStatusInDto = {
    id: taskId,
    statusMove: direction,
  };
  try {
    await TodoApi.updateStatus(payload);
    const res = await TodoApi.getTodos();
    todoStore.act(ETodoStoreEvents.SetTodos, res);
  } catch (err: any) {
    todoStore.act(ETodoStoreEvents.SetError, err?.message ?? err);
  } finally {
    todoStore.act(ETodoStoreEvents.SetLoading, false);
  }
};
