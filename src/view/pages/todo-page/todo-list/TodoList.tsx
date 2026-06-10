import { memo, use, useMemo } from 'react';
import type { TTodoDto } from '@/dto';
import { TodoStoreContext } from '@/view/ui-controllers';
import { TodoListElement } from './TodoListElement';

export const TodoList = memo(() => {
  const todoState = use(TodoStoreContext);

  const todos = useMemo(() => todoState.todos?.list ?? [], [todoState.todos]);

  return (
    <ul>
      {todos.map((todo: TTodoDto.TTodoElementDto) => (
        <TodoListElement
          description={todo.description}
          status={todo.status}
          title={todo.title}
        />
      ))}
    </ul>
  );
});
