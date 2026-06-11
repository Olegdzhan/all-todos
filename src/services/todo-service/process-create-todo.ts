import { TodoApi } from '@/api';
import { CreateTodoAdapter } from '@/application/forms';
import {
  ETodoStoreEvents, todoStore,
  ELoadingStoreEvent, loadingStore,
} from '@/store';

const loadingCreateId = 'loadingCreateId';
const loadingListId = 'loadingListId';

export async function processCreateTodo(formTarget: HTMLFormElement | undefined): Promise<void> {
  if (!formTarget) {
    return;
  }
  const formData = new FormData(formTarget);
  todoStore.act(ETodoStoreEvents.SetError, null);
  try {
    const payload = CreateTodoAdapter.formToPayload(formData);
    loadingStore.act(ELoadingStoreEvent.SetLoading, loadingCreateId, 'Сохранение задачи');
    await TodoApi.createTodo(payload);
    loadingStore.act(ELoadingStoreEvent.SetLoading, loadingListId, 'Получение списка задач');
    loadingStore.act(ELoadingStoreEvent.ClearLoading, loadingCreateId);
    const res = await TodoApi.getTodos();
    todoStore.act(ETodoStoreEvents.SetTodos, res);
    formTarget.reset();
    loadingStore.act(ELoadingStoreEvent.ClearLoading, loadingListId);
  } catch (err: any) {
    todoStore.act(ETodoStoreEvents.SetError, err?.message ?? err);
    loadingStore.act(ELoadingStoreEvent.ClearLoading, [loadingCreateId, loadingListId]);
  }
}
