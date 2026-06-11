import { CreateTodoSection } from './create-todo-section';
import { TodoListSection } from './todo-list-section';
import styles from './todo-page.module.css';

export const TodoPage = () => {
  return (
    <>
      <section className={styles.formRow}>
        <div>
          <h1>Заглушка</h1>
        </div>
        <CreateTodoSection />
      </section>
      <TodoListSection />
    </>
  );
};
