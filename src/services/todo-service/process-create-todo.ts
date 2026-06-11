import { TodoApi } from '@/api';
import { CreateTodoAdapter } from '@/application/forms';
import { LOADERS_IDS } from '@/application/loaders';
import {
  ETodoStoreEvents, todoStore,
  ELoadingStoreEvent, loadingStore,
} from '@/store';

export async function processCreateTodo(formTarget: HTMLFormElement | undefined): Promise<void> {
  if (!formTarget) {
    return;
  }
  loadingStore.act(ELoadingStoreEvent.SetLoading, LOADERS_IDS.CREATE_TASK, 'Сохранение задачи');
  const formData = new FormData(formTarget);
  todoStore.act(ETodoStoreEvents.SetError, null);
  try {
    const payload = CreateTodoAdapter.formToPayload(formData);
    await TodoApi.createTodo(payload);
    loadingStore.act(ELoadingStoreEvent.SetLoading, LOADERS_IDS.GET_TODO_LIST, 'Получение списка задач');
    loadingStore.act(ELoadingStoreEvent.ClearLoading, LOADERS_IDS.CREATE_TASK);
    const res = await TodoApi.getTodos();
    todoStore.act(ETodoStoreEvents.SetTodos, res);
    formTarget.reset();
    loadingStore.act(ELoadingStoreEvent.ClearLoading, LOADERS_IDS.GET_TODO_LIST);
  } catch (err: any) {
    todoStore.act(ETodoStoreEvents.SetError, err?.message ?? err);
    loadingStore.act(ELoadingStoreEvent.ClearLoading, [LOADERS_IDS.CREATE_TASK, LOADERS_IDS.GET_TODO_LIST]);
  }
}
