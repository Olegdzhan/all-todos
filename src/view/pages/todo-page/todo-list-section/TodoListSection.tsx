import { useMemo } from 'react';
import { LOADERS_IDS } from '@/application/loaders';
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
  const loadingMessage = loadingState[LOADERS_IDS.GET_TODO_LIST];

  return (
    <Loadable
      as="ul"
      className={styles.list}
      loading={loadingMessage}
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
