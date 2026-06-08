import { memo, type SubmitEvent } from 'react';
import { CREATE_TDO_FORM_IDS, ECreateTodoFormField, EFormName } from '@/forms';
import { TextInput } from '../../../framework/ui-kit/inputs';
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
      name={EFormName.CreateTodo}
      onSubmit={handleSubmit}
    >
      <TextInput
        id={CREATE_TDO_FORM_IDS.Title}
        label="Название задачи"
        name={ECreateTodoFormField.Title}
      />
      <label className={styles.label} htmlFor={CREATE_TDO_FORM_IDS.Description}>
        Описание задачи
        <textarea
          className={styles.textarea}
          id={CREATE_TDO_FORM_IDS.Description}
          name={ECreateTodoFormField.Description}
          placeholder="В рамках задачи предполагается сделать..."
          rows={5}
        />
      </label>
      <button className={styles.button} type="submit">Добавить</button>
    </form>
  );
});
