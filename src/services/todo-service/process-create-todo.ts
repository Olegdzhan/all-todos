import { TodoApi } from '@/api';
import { CreateTodoAdapter } from '@/forms';

export async function processCreateTodo(createTodoFormData: FormData): Promise<void> {
  const payload = CreateTodoAdapter.formToPayload(createTodoFormData);
  await TodoApi.createTodo(payload);
  const { list } = await TodoApi.getTodos();
  console.log(list);
}
