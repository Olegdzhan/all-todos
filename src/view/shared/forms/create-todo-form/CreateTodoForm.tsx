import { useStore } from '@iteasy/store-adapter-react';
import { memo, type SubmitEvent } from 'react';
import { CREATE_TDO_FORM_IDS, ECreateTodoFormField, EFormName } from '@/application/forms';
import { processCreateTodo } from '@/services/todo-service';
import {
  EFlatButtonType,
  FlatButton,
  TextArea,
  TextInput,
} from '@/view/ui-kit';
import { createTodoFormVM } from '@/view/view-models/for-shared';
import styles from './create-todo-form.module.css';

export const CreateTodoForm = memo(() => {
  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    processCreateTodo(event.target);
  };

  const viewModel = useStore(createTodoFormVM);

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
      <TextArea
        id={CREATE_TDO_FORM_IDS.Description}
        label="Описание задачи"
        name={ECreateTodoFormField.Description}
        placeholder="В рамках задачи предполагается сделать..."
      />
      <FlatButton
        htmlType="submit"
        loading={viewModel.submitIsLoading}
        type={EFlatButtonType.Primary}
      >
        Добавить
      </FlatButton>
    </form>
  );
});
