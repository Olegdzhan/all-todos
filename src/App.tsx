import { TodoPage } from './view/pages/todo-page';
import styles from './app.module.css';

export const App = () => (
  <section className={styles.container}>
    <TodoPage />
  </section>
);
