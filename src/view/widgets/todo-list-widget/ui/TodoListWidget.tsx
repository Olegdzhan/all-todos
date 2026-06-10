import { memo, use, useMemo } from 'react';
import type { TTodoDto } from '@/dto';
import { TodoStoreContext } from '@/view/ui-controllers';
import { Loadable } from '@/view/ui-kit';
import { TodoListElement } from './TodoListElement';
import styles from './todo-list-widget.module.css';

export const TodoListWidget = memo(() => {
  const todoState = use(TodoStoreContext);

  const todos = useMemo(() => todoState.todos?.list ?? [], [todoState.todos]);
  const isLoading = todoState.loading;

  return (
    <Loadable
      as="ul"
      className={styles.list}
      loading={isLoading}
    >
      {todos.map((todo: TTodoDto.TTodoElementDto) => (
        <TodoListElement
          key={todo.id}
          description={todo.description}
          status={todo.status}
          title={todo.title}
        />
      ))}
    </Loadable>
  );
});
