import { TodoApi } from '@/api';
import { CreateTodoAdapter } from '@/forms';
import { ETodoStoreEvents, todoStore } from '@/store';

export async function processCreateTodo(formTarget: HTMLFormElement | undefined): Promise<void> {
  if (!formTarget) {
    return;
  }
  const formData = new FormData(formTarget);
  todoStore.act(ETodoStoreEvents.SetError, null);
  todoStore.act(ETodoStoreEvents.SetLoading, true);
  try {
    const payload = CreateTodoAdapter.formToPayload(formData);
    await TodoApi.createTodo(payload);
    const res = await TodoApi.getTodos();
    todoStore.act(ETodoStoreEvents.SetTodos, res);
    formTarget.reset();
  } catch (err: any) {
    todoStore.act(ETodoStoreEvents.SetError, err?.message ?? err);
  } finally {
    todoStore.act(ETodoStoreEvents.SetLoading, false);
    console.log(todoStore.state);
  }
}
