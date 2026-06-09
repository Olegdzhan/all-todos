import { memo } from 'react';
import { TodoStoreProvider } from '@/view/ui-controllers';
import { CreateTodo } from './create-todo';
import { TodoList } from './todo-list';
import styles from './todo-page.module.css';

export const TodoPage = memo(() => {
  console.log('Todo Page rendered');

  return (
    <TodoStoreProvider>
      <section className={styles.formRow}>
        <div>
          <h1>Заглушка</h1>
        </div>
        <CreateTodo />
      </section>
      <TodoList />
    </TodoStoreProvider>
  );
});
