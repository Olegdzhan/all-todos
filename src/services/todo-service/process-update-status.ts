import { TodoApi } from '@/api';
import { ETaskStatusMove } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';
import {
  ELoadingStoreEvent,
  ETodoStoreEvents,
  loadingStore,
  todoStore,
} from '@/store';

const loadingStatusId = 'loadingCreateId';
const loadingListId = 'loadingListId';

export const processUpdateTaskStatus = async (
  taskId: string,
  direction: ETaskStatusMove,
): Promise<void> => {
  todoStore.act(ETodoStoreEvents.SetError, null);
  loadingStore.act(ELoadingStoreEvent.SetLoading, loadingStatusId, 'Обновляю статус');
  const payload: TTodoDto.TUpdateTaskStatusInDto = {
    id: taskId,
    statusMove: direction,
  };
  try {
    await TodoApi.updateStatus(payload);
    loadingStore.act(ELoadingStoreEvent.SetLoading, loadingListId, 'Получение списка задач');
    loadingStore.act(ELoadingStoreEvent.ClearLoading, loadingStatusId);
    const res = await TodoApi.getTodos();
    todoStore.act(ETodoStoreEvents.SetTodos, res);
    loadingStore.act(ELoadingStoreEvent.ClearLoading, loadingListId);
  } catch (err: any) {
    todoStore.act(ETodoStoreEvents.SetError, err?.message ?? err);
    loadingStore.act(ELoadingStoreEvent.ClearLoading, [loadingStatusId, loadingListId]);
  }
};
