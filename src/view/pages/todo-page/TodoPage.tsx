import { memo } from 'react';
import { TodoStoreProvider } from '@/view/ui-controllers';
import { TodoFormWidget } from '@/view/widgets/todo-form-widget';
import { TodoListWidget } from '@/view/widgets/todo-list-widget';
import styles from './todo-page.module.css';

export const TodoPage = memo(() => {
  return (
    <TodoStoreProvider>
      <section className={styles.formRow}>
        <div>
          <h1>Заглушка</h1>
        </div>
        <TodoFormWidget />
      </section>
      <TodoListWidget />
    </TodoStoreProvider>
  );
});
