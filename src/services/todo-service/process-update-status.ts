import { TodoApi } from '@/api';
import { LOADERS_IDS } from '@/application/loaders';
import {
  ELoadingStoreEvent,
  ETodoStoreEvents,
  loadingStore,
  todoStore,
} from '@/store';

import type { ETaskStatusMove } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';

export const processUpdateTaskStatus = async (
  taskId: string,
  direction: ETaskStatusMove,
): Promise<void> => {
  todoStore.act(ETodoStoreEvents.SetError, null);
  loadingStore.act(ELoadingStoreEvent.SetLoading, LOADERS_IDS.UPDATE_STATUS$(taskId), 'Обновляю статус');
  const payload: TTodoDto.TUpdateTaskStatusInDto = {
    id: taskId,
    statusMove: direction,
  };
  try {
    await TodoApi.updateStatus(payload);
    loadingStore.act(ELoadingStoreEvent.SetLoading, LOADERS_IDS.GET_TODO_LIST, 'Получение списка задач');
    loadingStore.act(ELoadingStoreEvent.ClearLoading, LOADERS_IDS.UPDATE_STATUS$(taskId));
    const res = await TodoApi.getTodos();
    todoStore.act(ETodoStoreEvents.SetTodos, res);
    loadingStore.act(ELoadingStoreEvent.ClearLoading, LOADERS_IDS.GET_TODO_LIST);
  } catch (err: any) {
    todoStore.act(ETodoStoreEvents.SetError, err?.message ?? err);
    loadingStore.act(ELoadingStoreEvent.ClearLoading, [
      LOADERS_IDS.UPDATE_STATUS$(taskId),
      LOADERS_IDS.GET_TODO_LIST,
    ]);
  }
};
