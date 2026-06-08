import { memo } from 'react';
import { CreateTodo } from './create-todo';
import { TodoList } from './todo-list';

export const TodoPage = memo(() => (
  <>
    <CreateTodo />
    <TodoList />
  </>
));
