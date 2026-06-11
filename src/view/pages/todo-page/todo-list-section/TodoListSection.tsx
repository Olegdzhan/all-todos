import { useMemo } from 'react';
import type { TTodoDto } from '@/dto';
import { loadingStore, todoStore } from '@/store';
import { useStore } from '@/view/ui-controllers';
import { Loadable } from '@/view/ui-kit';
import { TodoIdContext } from './contexts';
import { Task } from './task';
import styles from './todo-list-section.module.css';

export const TodoListSection = () => {
  const todoState = useStore(todoStore);
  const loadingState = useStore(loadingStore);

  const todos = useMemo(() => todoState.todos?.list ?? [], [todoState.todos]);
  const isLoading = Object.keys(loadingState).length > 0;

  return (
    <Loadable
      as="ul"
      className={styles.list}
      loading={isLoading}
    >
      {todos.map((todo: TTodoDto.TTodoElementDto) => (
        <TodoIdContext key={todo.id} value={todo.id}>
          <Task
            description={todo.description}
            status={todo.status}
            title={todo.title}
          />
        </TodoIdContext>
      ))}
    </Loadable>
  );
};
