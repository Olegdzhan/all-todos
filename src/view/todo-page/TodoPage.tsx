import { memo } from 'react';
import { TodoStoreProvider } from '@/view/ui-controllers';
import { CreateTodo } from './create-todo';
import { TodoList } from './todo-list';

export const TodoPage = memo(() => {
  console.log('Todo Page rendered');

  return (
    <TodoStoreProvider>
      <CreateTodo />
      <TodoList />
    </TodoStoreProvider>
  );
});
