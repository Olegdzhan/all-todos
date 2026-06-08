import { memo, type SubmitEvent } from 'react';
import styles from './create-todo.module.css';

export const CreateTodo = memo(() => {
  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    if (!event.target) {
      return;
    }
    const formData = new FormData(event.target);
    const formPayload = Object.fromEntries(formData);
    console.log(formPayload);
  };

  return (
    <form
      className={styles.form}
      name="createTodoForm"
      onSubmit={handleSubmit}
    >
      <label className={styles.label} htmlFor="taskTitleField">
        Название задачи
        <input
          className={styles.input}
          id="taskTitleField"
          name="taskTitleField"
          placeholder="Сделать много дел"
          type="text"
        />
      </label>
      <button className={styles.button} type="submit">Добавить</button>
    </form>
  );
});
