import { memo, use, useMemo } from 'react';
import type { TTodoDto } from '@/dto';
import { TodoStoreContext } from '@/view/ui-controllers';

export const TodoList = memo(() => {
  const todoState = use(TodoStoreContext);

  const todos = useMemo(() => todoState.todos?.list ?? [], [todoState]);

  return (
    <ul>
      {todos.map((todo: TTodoDto.TTodoElementDto) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.done ? 'Сделано' : 'Не сделано'}</p>
        </li>
      ))}
    </ul>
  );
});
