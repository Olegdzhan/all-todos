import { memo } from 'react';
import { TodoStoreProvider } from '@/view/ui-controllers';
import { CreateTodo } from './create-todo';
import { TodoList } from './todo-list';

export const TodoPage = memo(() => (
  <TodoStoreProvider>
    <CreateTodo />
    <TodoList />
  </TodoStoreProvider>
));
